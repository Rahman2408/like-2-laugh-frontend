import './App.css';
import {Switch, Route} from 'react-router-dom'
import { JokeList, MyJokesList, JokeShow, Auth, Nav} from './components'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { autoLogin } from './redux/actionCreator'


function App(props) {
  useEffect(() => localStorage.token && props.autoLogin(), [autoLogin]) 
  const titleCase = str => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
  return (
    <div className="main">
      <header className="header">
       <h1>Like-2-Laugh</h1>
        <Nav/>
      </header>
      
        {props.user.username ?
      <Switch>
        <Route path="/jokes/:id">
          <JokeShow />
        </Route>

        <Route path={"/myjokes"}>
          <MyJokesList />
        </Route>

        <Route path="/jokes">
          <h2>All Jokes:</h2>
          <JokeList />
        </Route>
        <Route exact path={'/'}>
          <h1>Welcome {titleCase(props.user.username)}</h1>
        </Route>
      </Switch> :
      <Auth />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);
