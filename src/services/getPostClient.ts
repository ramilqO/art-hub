export default function getPostClient(
  pathname: string,
  category: string,
  slicer: number
) {
  const fetchPost = async () => {
    const post = await fetch(
      `http://localhost:3000/api/${category}/${pathname.slice(slicer)}`
    )
      .then((res) => res.json())
      .then((post) => post)
      .catch((e) => console.log(e));
  };
}
