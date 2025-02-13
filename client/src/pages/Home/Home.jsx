import React from "react";
import Layout from "../../components/Layout/Layout";
import NewPost from "./NewPost";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

function Home() {
  return (
    <Layout>
      <div className="p-5 flex">
        <div className="bg-[#7ED957] p-5 rounded-md flex flex-col flex-1">
          <NewPost />
          <Posts />
        </div>
        <Sidebar />
      </div>
    </Layout>
  );
}

export default Home;
