import { useEffect } from "react";
import { getMyJokes } from '../../redux/actionCreator'
import { connect } from 'react-redux'
import { MyJokeCard, MyJokeForm } from "../../components";

function MyJokesList({jokes, getMyJokes}) {

  useEffect( getMyJokes, [getMyJokes])

  return <div className="cards">
  {jokes.map(joke => <MyJokeCard {...joke} key={joke.id}/>)}
  <br></br>

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