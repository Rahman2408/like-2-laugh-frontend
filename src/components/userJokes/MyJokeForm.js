import { useState } from 'react'
import { connect } from 'react-redux'
import { submitJoke } from '../../redux/actionCreator'

function MyJokeForm({submitJoke}) {
  
  const [joke_setup, setSetup] = useState("")
  const [joke_punchline, setPunchline] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newJoke = {joke_setup, joke_punchline}
    submitJoke(newJoke)
  }

  return <form className='new_joke' onSubmit={handleSubmit}>
    <label>
      Joke Setup:
      <input type="text" name="joke_setup" onChange={(e) => setSetup(e.target.value)} value={joke_setup} />
    </label>
  <br></br>
    <label>
      Punchline:
      <input type="text" name="joke_punchline" onChange={(e)=> setPunchline(e.target.value)} value={joke_punchline}/>
    </label>
  <br></br>
    <input type="submit" value="Submit" />
  </form>
}

export default connect(null, {submitJoke})(MyJokeForm)