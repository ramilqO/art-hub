import PageLayout from "@/components/globals/PageLayout/PageLayout";
import Post from "@/components/globals/Post/Post";
import { NextPage } from "next";

const fetchData = () =>
  fetch("/api/popular").then((response) => response.json());

const Popular: NextPage = async () => {
  const posts = await fetchData();
  return (
    <PageLayout showSidebar showSideComments>
      {posts.map((post: TPost, index: number) => {
        return <Post key={index} category="popular" {...post} />;
      })}
    </PageLayout>
  );
};

export default Popular;
