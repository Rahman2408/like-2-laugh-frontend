import { useEffect } from "react";
import { getJokes } from '../redux/actionCreator'
import { connect } from 'react-redux'
import  JokeCard  from '../components/JokeCard'

function JokeList({getJokes, jokes}) {

  useEffect(getJokes, [getJokes])
  
  return <div className="cards">
    {jokes.map(joke => <JokeCard {...joke} key={joke.id}/>)}
  </div>
}
const mapStateToProps = (state) => {
  return {
    jokes: state.jokes,
    image_link: "https://icanhazdadjoke.com/j/"
  }
}
export default connect(mapStateToProps, {getJokes})(JokeList);