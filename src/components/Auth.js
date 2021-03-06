import  { useState } from 'react'
import { submitSignup, submitLogin } from '../redux/actionCreator'
import { connect } from 'react-redux'

function Auth(props){

  const [signup, setSignup] = useState(false)

  const [username, setUsername] = useState('')

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const toggleSignup = () => setSignup(!signup)

  const handleSubmit = (e) => {
    e.preventDefault()
    signup ? props.submitSignup({username, email, password}) : props.submitLogin({username, password})
    
  }

  return <>
      {signup ? <h2>Sign Up!</h2> : <h2>Login Here</h2>} 
      <form onSubmit={handleSubmit} >
      <label>
        Username: <br></br>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
      </label><br></br>
      {signup && <label>
        Email Address: <br></br>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
      </label>}
      <label><br></br>
        Password: <br></br>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label><br></br><br></br>
      <input type="submit" value="Submit" />
    </form><br></br><br></br>
      <button onClick={toggleSignup}> {signup ? "Log In" : "Sign Up"} </button>
  </>
}
export default connect(null, { submitSignup, submitLogin })(Auth);