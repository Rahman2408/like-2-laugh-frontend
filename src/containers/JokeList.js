import { useEffect } from "react";

function JokeList(props) {

  useEffect(() => console.log('useEffect is working'))

  return <h3>Presentational component to render jokes here</h3>
}

export default JokeList;