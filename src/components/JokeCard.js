import { Link } from "react-router-dom"

export default function jokeCard(props){

  return <div className="jokeCard">
   <Link to={`/jokes/${props.id}`}>{props.joke_setup}</Link>
  </div>
}