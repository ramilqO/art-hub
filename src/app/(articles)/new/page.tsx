import PageLayout from "@/components/globals/PageLayout/PageLayout";
import Post from "@/components/globals/Post/Post";
import { NextPage } from "next";

const fetchData = () =>
  fetch("http://localhost:3000/api/new").then((response) => response.json());

const Page: NextPage = async () => {
  const posts = await fetchData();
  return (
    <PageLayout showSideComments showSidebar>
      {posts.map((post: TPost, index: number) => {
        return <Post key={index} category="new" {...post} />;
      })}
    </PageLayout>
  );
};

export default Page;
