import { useEffect } from "react";
import { getJokes } from '../redux/actionCreator'
import { connect } from 'react-redux'
import  JokeCard  from '../components/JokeCard'

function JokeList(props) {

  useEffect(() => props.jokes.length === 0 && props.getJokes(), [props.jokes])
  console.log(props)
  return <div className="jokeListCards">
    {props.jokes.map(joke => <JokeCard {...joke} key={joke.id}/>)}
  </div>
}
const mapStateToProps = (state) => {
  return {jokes: state.jokes}
}
export default connect(mapStateToProps, {getJokes})(JokeList);