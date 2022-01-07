import { useParams, Link } from "react-router-dom"
import { connect } from "react-redux"
import { getJoke, clearJoke } from "../redux/actionCreator"
import { useEffect } from "react"


  function JokeShow({joke_punchline,joke_setup,created_at, getJoke, clearJoke}){

    const routeId = useParams().id
    
    useEffect(() => {
      getJoke(routeId)
      return clearJoke
    }, [getJoke, routeId, clearJoke])

  
    return <div className="show">
      <h2>{joke_setup}</h2>
      <h3>{joke_punchline}</h3> 
      <p>Added: {new Date(created_at).toDateString()}</p>
      <Link to={`/jokes/${parseInt(routeId) + 1}`}> Next Joke</Link>
    </div>

}
const mapStateToProps = (state) => {
  return {...state.selectedJoke}
}
export default connect(mapStateToProps, {getJoke, clearJoke})(JokeShow)