import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
  const url = req.url.slice(31);

  const post: TPost | null = await prisma.post.findUnique({
    where: {
      id: url,
    },
  });

  if (post) {
    return new Response(JSON.stringify(post));
  } else {
    return new Response(JSON.stringify({ data: null, url }));
  }
}
