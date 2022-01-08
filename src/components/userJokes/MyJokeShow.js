import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { getMyJoke, clearJoke } from "../../redux/actionCreator"
import { useEffect } from "react"


  function MyJokeShow({joke_punchline,joke_setup,created_at, getMyJoke, clearJoke}){

    const routeId = useParams().id
    
    useEffect(() => {
      getMyJoke(routeId)
      return clearJoke
    }, [getMyJoke, routeId, clearJoke])

  
    return <div className="show">
      <h2>{joke_setup}</h2>
      <h3>{joke_punchline}</h3> 
      <p>Added: {new Date(created_at).toDateString()}</p>
    </div>

}
const mapStateToProps = (state) => {
  return {...state.selectedJoke}
}
export default connect(mapStateToProps, {getMyJoke, clearJoke})(MyJokeShow)