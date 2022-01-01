import './App.css';
import JokeList from './containers/JokeList';


function App() {
  return (
    <div className="main">
      <header className="header">
       iLike-2-Laugh
      </header>
      <h1>Some Jokes</h1>
      <JokeList />
    </div>
  );
}

export default App;
