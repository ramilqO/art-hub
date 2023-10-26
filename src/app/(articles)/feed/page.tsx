import PageLayout from "@/components/globals/PageLayout/PageLayout";
import Post from "@/components/globals/Post/Post";
import { NextPage } from "next";

const fetchData = () => fetch("/api/new").then((response) => response.json());

const Page: NextPage = async () => {
  const posts = await fetchData();
  return (
    <PageLayout showSideComments showSidebar>
      {posts.map((post: TPost, index: number) => {
        return <Post key={index} category="feed" {...post} />;
      })}
    </PageLayout>
  );
};

export default Page;
