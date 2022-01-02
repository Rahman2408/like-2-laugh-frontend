import './App.css';
import {Switch, Route} from 'react-router-dom'
import { JokeList, MyJokesList, JokeShow, Auth, Nav} from './components'
import { connect } from 'react-redux';

function App(props) {
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
          <h1>Welcome Page</h1>
        </Route>
      </Switch> :
      <Auth />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps)(App);
