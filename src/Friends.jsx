import { use } from "react"
import Friend from './Friend';

export default function Friends({promiseFriends}){
  
  const friends = use(promiseFriends);

  return(
    <div className="user">
      <h3>Friends:{friends.length}</h3>
      {
        friends.map(f => <Friend key={f.id} f={f}></Friend>)
      }
    </div>
  )
}