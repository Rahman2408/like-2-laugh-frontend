import { useParams, Link } from "react-router-dom"
import { connect } from "react-redux"
import { getJoke, clearJoke } from "../redux/actionCreator"
import { useEffect } from "react"


  function JokeShow({joke, getJoke, clearJoke}){

    const routeId = useParams().id
    
    useEffect(() => {
      getJoke(routeId)
      return clearJoke
    }, [getJoke, routeId, clearJoke])

    return <div className="show">
      <h2>{joke}</h2>
      <Link to={`/jokes/${parseInt(routeId) + 1}`}> Next Joke</Link>
    </div>

}
const mapStateToProps = (state) => {
  return {...state.selectedJoke}
}
export default connect(mapStateToProps, {getJoke, clearJoke})(JokeShow)