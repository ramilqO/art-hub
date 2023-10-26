type TCategory = "feed" | "popular" | "new";

type TPost = {
  id: string;
  title: string;
  content: string;
  authorId: string;
  category?: any;
};
