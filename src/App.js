import './App.css';
import {Switch, Route} from 'react-router-dom'
import { JokeList, MyJokesList, JokeShow, Nav} from './components'

function App() {
  return (
    <div className="main">
      <header className="header">
       <h1>iLike-2-Laugh</h1>
        <Nav/>
      </header>
      
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
      </Switch>
    </div>
  );
}

export default App;
