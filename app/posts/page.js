import Link from 'next/link'
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}
const Posts = async () => {
  const posts = await getPosts()
  return (
    <div>
      <h1 className="text-center text-6xl text-blue-800">Post Page</h1>
      <ul>
        {posts.map((item) => (
          <Link key={item.id} href={`/posts/${item.id}`}>
            <li key={item.id} className="text-center text-xl">
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Posts
