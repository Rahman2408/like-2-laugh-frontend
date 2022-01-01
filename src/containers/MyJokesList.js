import { useEffect } from "react";
import { getMyJokes } from '../redux/actionCreator'
import { connect } from 'react-redux'
import  JokeCard  from '../components/JokeCard'

function MyJokesList(props) {

  useEffect( props.getMyJokes, [props.getMyJokes])
  
  return <div className="cards">
    {props.jokes.map(joke => <JokeCard {...joke} key={joke.id}/>)}
  </div>
}
const mapStateToProps = (state) => {
  return {
    jokes: state.jokes
  }
}
export default connect(mapStateToProps, {getMyJokes})(MyJokesList);