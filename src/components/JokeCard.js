import { Link } from "react-router-dom"

export default function jokeCard(props){

  return <div className="jokeCard">
   <Link to={`/jokes/${props.id}`}><h4>{props.joke}</h4></Link>
  </div>
}