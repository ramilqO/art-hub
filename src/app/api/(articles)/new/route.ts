import { getPostsByCategory } from "@/services/getPosts";

export async function GET() {
  const posts = await getPostsByCategory("new");
  return new Response(JSON.stringify(posts));
}
