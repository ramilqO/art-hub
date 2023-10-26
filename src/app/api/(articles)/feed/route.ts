import { getPostsByCategory } from "@/services/getPosts";

export async function GET() {
  const posts = await getPostsByCategory("feed");
  return new Response(JSON.stringify(posts));
}
