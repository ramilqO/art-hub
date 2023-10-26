import { getPostsByCategory } from "@/services/getPosts";

export async function GET() {
  const posts = await getPostsByCategory("popular");
  return new Response(JSON.stringify(posts));
}
