export const getJokes = () => {
  return dispatch => fetch("http://localhost:3000/jokes")
  .then(response => response.json())
  .then(jokes => dispatch({type: "GET_JOKES", payload: jokes})
  );
}

export const getJoke = (id) => {
  return dispatch => fetch(`http://localhost:3000/jokes/${id}`)
  .then(response => response.json())
  .then(joke => dispatch({type: "GET_JOKE", payload: joke}))
}