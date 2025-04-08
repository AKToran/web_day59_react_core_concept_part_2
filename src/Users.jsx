import { use } from "react"

export default function Users({fetchUsers}){
  const users = use(fetchUsers);
  // console.log(users);
  return(
    <div className="user">
      <h3>Users: {users[0].name}</h3>
    </div>
  )
} 