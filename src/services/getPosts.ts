import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPostsByCategory = async (category: TCategory) => {
  const reqs = {
    feed: async () => {
      const posts = await prisma.post.findMany();
      return posts;
      //random posts
    },
    popular: async () => {
      const posts = await prisma.post.findMany();
      return posts;
      //where likes > 10
    },
    new: async () => {
      const posts = await prisma.post.findMany();
      return posts;
      //where this.date < dat.now() - datePost
    },
  };

  return await reqs[category]();
};
