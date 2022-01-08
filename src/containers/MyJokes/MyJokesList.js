import { useEffect } from "react";
import { getMyJokes } from '../../redux/actionCreator'
import { connect } from 'react-redux'
import { MyJokeCard, MyJokeForm } from "../../components";

function MyJokesList(props) {

  useEffect( props.getMyJokes, [props.getMyJokes])

  return <div className="cards">
  {props.jokes.map(joke => <MyJokeCard {...joke} key={joke.id}/>)}
  <br></br>
  <h4>Feelin' Funny? Add Your Own!</h4>
  <br></br>
  <MyJokeForm />
  </div>
}
const mapStateToProps = (state) => {
  return {
    jokes: state.jokes
  }
}
export default connect(mapStateToProps, {getMyJokes})(MyJokesList);