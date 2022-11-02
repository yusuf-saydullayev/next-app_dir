import Link from 'next/link'
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

const Users = async () => {
  const users = await getUsers()

  return (
    <div>
      <ul className="grid grid-cols-5 gap-6">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <li className="px-4 bg-orange-400 text-white text-center py-10">{user.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Users
