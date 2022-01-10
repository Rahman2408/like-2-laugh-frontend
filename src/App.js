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
          <h1>Welcome {titleCase(user["username"] )}</h1>
        </Route>
      </Switch> : <Auth />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);
