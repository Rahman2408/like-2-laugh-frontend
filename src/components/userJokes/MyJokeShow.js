import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { getMyJoke, clearJoke, deleteJoke } from "../../redux/actionCreator"
import { useEffect } from "react"


  function MyJokeShow({id, joke_punchline,joke_setup,created_at, getMyJoke, clearJoke, deleteJoke}){

    const routeId = useParams().id
    
    const handleClick = (e) => {
      e.preventDefault()
      deleteJoke(id)
      window.location.pathname ='/myjokes'
    }

    useEffect(() => {
      getMyJoke(routeId)
      return clearJoke
    }, [getMyJoke, routeId, clearJoke])

  
    return <div className="show">
      <h2>{joke_setup}</h2>
      <h3>{joke_punchline}</h3> 
      <p>Added: {new Date(created_at).toDateString()}</p>
      <button onClick={handleClick}>Delete From Saved</button>
    </div>

}
const mapStateToProps = (state) => {
  return {...state.selectedJoke}
}
export default connect(mapStateToProps, {getMyJoke, clearJoke, deleteJoke})(MyJokeShow)