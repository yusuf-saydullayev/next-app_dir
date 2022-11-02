async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}
const Posts = async ({params}) => {
  const post = await getPost(params.id)
  return (
    <div>
      <h1 className="text-center text-6xl text-blue-800">Post Page</h1>
      <p>
        {post.title}
        {post.body}
      </p>
    </div>
  )
}

export default Posts
