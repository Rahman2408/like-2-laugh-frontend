import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { getJoke, clearJoke, submitJoke } from "../redux/actionCreator"
import { useEffect } from "react"


  function JokeShow({joke_punchline,joke_setup,created_at, getJoke, clearJoke, submitJoke}){
    
    const handleSubmit = (e) => {
      e.preventDefault()
      const newJoke = {joke_setup, joke_punchline}
      submitJoke(newJoke)
      alert("Joke Saved!")
      window.location.pathname ='/myjokes'
    }
    
    const routeId = useParams().id
    
    useEffect(() => {
      getJoke(routeId)
      return clearJoke
    }, [getJoke, routeId, clearJoke])


    return <div className="show">
      <h2>{joke_setup}</h2>
      <h3>{joke_punchline}</h3> 
      <p>Added: {new Date(created_at).toDateString()}</p>
      <br></br>
      <button onClick={handleSubmit} >Save Joke</button>
    </div>

}
const mapStateToProps = (state) => {
  return {...state.selectedJoke}
}
export default connect(mapStateToProps, {getJoke, clearJoke, submitJoke})(JokeShow)