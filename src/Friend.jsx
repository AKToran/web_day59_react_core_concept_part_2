export default function Friend({f}){
  const {name, email} = f;

  return(
    <div className="user">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  )
}