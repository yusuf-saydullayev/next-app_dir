async function getUser( id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{cache:'force-cache'})
  return res.json()
}

const UserPage = async ({ params }) => {
  const user = await getUser(params.id)
  return (
    <div>
      <ul>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
        <li>{user.website}</li>
      </ul>
    </div>
  )
}

export default UserPage
