import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
  const url = req.url;

  const post: TPost | null = await prisma.post.findUnique({
    where: {
      id: url.slice(34),
    },
  });

  if (post) {
    return new Response(JSON.stringify(post));
  } else {
    return new Response(JSON.stringify({ data: null, url }));
  }
}
