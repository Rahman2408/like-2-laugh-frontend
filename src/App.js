import './App.css';
import {Switch, Route} from 'react-router-dom'
import { JokeList, MyJokesList, MyJokeShow, JokeShow, Auth, Nav} from './components'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { autoLogin } from './redux/actionCreator'


function App({user, autoLogin}) {
  useEffect(() => localStorage.token && autoLogin(), [autoLogin]) 
  
  const titleCase = str => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
  
  
  
  return (
    <div className="main">
      <header className="header">
       <h1>Like-2-Laugh</h1>
        <Nav/>
      </header>
      
        {user["username"] ?
      <Switch>
        <Route path="/jokes/:id">
          <JokeShow />
        </Route>

        <Route path="/myjokes/:id">
          <MyJokeShow />
        </Route>

        <Route path={"/myjokes"}>
        <h2>My Saved Jokes:</h2>
          <MyJokesList />
        </Route>

        <Route path="/jokes">
          <h2>All Jokes:</h2>
          <JokeList />
        </Route>
        <Route exact path={'/'}> 
          <>  
            <h1>Welcome {titleCase(user["username"] )}</h1>
            <p> If you're looking the ultimate mood booster, you're exactly where you should be. Take a look through a 
              library of jokes others have come up with, save the ones you find worth remembering for later, and even throw one of your own into the mix if you're up for it!
              We all need a pick-me-up sometimes, whether to take our eyes off something, clear our minds for a bit, or maybe just because we feel like it. 
              After all, what's the harm in trying or worst it could possibly do, make you laugh? Start by clicking above and you'll be crackin' up in no time!    
            </p>
          </>
        </Route>
      </Switch> : <Auth />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);
