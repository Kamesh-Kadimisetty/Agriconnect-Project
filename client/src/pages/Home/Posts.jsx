import axios from "axios";
import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setposts] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/posts/posts`);
      if (res) {
        console.log(res);
        setposts(res.data.posts);
      } else {
        console.log("Unknown error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return years === 1 ? "1 year ago" : `${years} years ago`;
    } else if (months > 0) {
      return months === 1 ? "1 month ago" : `${months} months ago`;
    } else if (days > 0) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
      return "Just now";
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="h-[670px] overflow-y-scroll">
      {posts !== null &&
        posts.map((e, i) => (
          <div className="bg-[#E4F9DC] my-5 p-5" key={i}>
            <div className="flex justify-between">
              <p>Posted by {e.name}</p>
              <p>{formatDate(e.createdAt)}</p>
            </div>
            <div className="flex justify-center py-3">
              <img src={e.link} alt="" className="w-fit my-3 rounded-md max-h-[400px]" />
            </div>
            <p className="text-sm">{e.message}</p>
          </div>
        ))}
    </div>
  );
}

export default Posts;
