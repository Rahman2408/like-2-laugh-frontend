import './App.css';
import JokeList from './containers/JokeList';
import {Switch, Route} from 'react-router-dom'
import JokeShow from './containers/JokeShow';

function App() {
  return (
    <div className="main">
      <header className="header">
       <h1>iLike-2-Laugh</h1>
      </header>
      <Switch>
        <Route path="/jokes/:id">
          <JokeShow />
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
