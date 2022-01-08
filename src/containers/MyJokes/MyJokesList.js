import { useEffect } from "react";
import { getMyJokes } from '../../redux/actionCreator'
import { connect } from 'react-redux'
import { MyJokeCard } from "../../components";

function MyJokesList(props) {

  useEffect( props.getMyJokes, [props.getMyJokes])
  console.log(props)
  return <div className="cards">
  {props.jokes.map(joke => <MyJokeCard {...joke} key={joke.id}/>)}
  </div>
}
const mapStateToProps = (state) => {
  return {
    jokes: state.jokes
  }
}
export default connect(mapStateToProps, {getMyJokes})(MyJokesList);