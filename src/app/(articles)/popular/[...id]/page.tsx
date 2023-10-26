"use client";
import Fullpost from "@/components/globals/FullPost/FullPost";
import PageLayout from "@/components/globals/PageLayout/PageLayout";
import Post from "@/components/globals/Post/Post";
import { NextPage } from "next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Popular: NextPage = () => {
  const [post, setPost] = useState<TPost>();
  const pathname = usePathname();

  const fetchPost = async () => {
    const post = await fetch(
      `http://localhost:3000/api/popular/${pathname.slice(9)}`
    )
      .then((res) => res.json())
      .then((post) => setPost(post))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <PageLayout showSidebar showSideComments>
      {post ? <Fullpost {...post} /> : "Loading..."}
    </PageLayout>
  );
};

export default Popular;
