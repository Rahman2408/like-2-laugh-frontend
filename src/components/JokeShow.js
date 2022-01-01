import { useParams, Link } from "react-router-dom"
import { connect } from "react-redux"
import { getJoke } from "../redux/actionCreator"
import { useEffect } from "react"


  function JokeShow(props){

    const routeId = useParams().id
    
    useEffect(() => {
      props.getJoke(routeId)
    }, [props.getJoke, routeId])

    return <div className="show">
      <h2>{props.joke}</h2>
      <Link to={`/jokes/${parseInt(routeId) + 1}`}> Next Joke</Link>
    </div>

}
const mapStateToProps = (state) => {
  return {...state.selectedJoke}
}
export default connect(mapStateToProps, {getJoke})(JokeShow)