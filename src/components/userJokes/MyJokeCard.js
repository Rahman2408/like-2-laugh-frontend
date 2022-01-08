import { Link } from "react-router-dom"

export default function MyJokeCard(props){

  return <div className="jokeCard">
   <Link to={`/myjokes/${props.id}`}>{props.joke_setup}</Link>
  </div>
}