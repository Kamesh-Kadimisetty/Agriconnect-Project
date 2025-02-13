import React, { useRef, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import axios from "axios";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_APIKEY,
  authDomain: import.meta.env.VITE_FB_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECTID,
  storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FB_APPID,
};

const app = initializeApp(firebaseConfig);

function NewPost() {
  const [files, setFiles] = useState([]);
  const [uploadStatus, setuploadStatus] = useState(false);
  const fileInputRef = useRef(null);
  const [message, setmessage] = useState("");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API}/posts/post`, {
        link: files[0],
        message: message,
        type: isImageOrVideo(files[0]),
      });
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  function isImageOrVideo(fileUrl) {
    const extension = fileUrl.split(".").pop().toLowerCase().substring(0, 3);
    console.log(extension);

    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "jpe"];
    const videoExtensions = ["mp4", "avi", "mov", "mkv", "webm", "web"];

    if (imageExtensions.includes(extension)) {
      return "image";
    }

    if (videoExtensions.includes(extension)) {
      return "video";
    }

    return "unknown";
  }

  async function uploadImages(ev) {
    const files = Array.from(ev.target.files);
    if (files.length === 0) return;
    else {
      const storage = getStorage();
      setuploadStatus(true);
      files.map((file, i) => {
        const storageRef = ref(storage, "reports/" + file.name);
        uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadUrl) => {
            console.log(downloadUrl);
            setFiles((fileURls) => {
              if (i == files.length - 1) {
                setuploadStatus(false);
              }
              return [...fileURls, ...[downloadUrl]];
            });
          });
        });
      });
    }
  }

  return (
    <div className="bg-[#E4F9DC] p-3 flex flex-1 flex-col">
      <div className="flex items-center space-x-3">
        <button
          className="bg-[#7ED957] p-3 rounded-full"
          onClick={handleButtonClick}
        >
          <AddAPhotoIcon className="text-[#E4F9DC]" />
        </button>
        <form onSubmit={handleSubmit} className="flex-1 flex items-center">
          <textarea
            value={message}
            type="text"
            placeholder="How's your crop?"
            className="w-full text-lg bg-transparent outline-none h-[30px]"
            onChange={(e) => setmessage(e.target.value)}
          />
        </form>
        <button
          onClick={handleSubmit}
          className="mx-3 bg-[#7ED957] px-3 py-2 font-extrabold text-white rounded-md"
        >
          Post
        </button>
      </div>

      {uploadStatus && <LinearProgress color="success" className="mt-3" />}
      {/* uploaded images */}
      {files && (
        <div className="flex mt-3 justify-end">
          {files.map((e, i) => (
            <img src={e} key={i} alt="" className="h-[100px]" />
          ))}
        </div>
      )}

      {/* File input element */}
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        ref={fileInputRef}
        className="hidden"
        onChange={uploadImages}
      />
    </div>
  );
}

export default NewPost;
