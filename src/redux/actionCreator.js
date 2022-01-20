const api = process.env.REACT_APP_API

export const getJokes = () => {
  return dispatch => fetch(api + "/jokes")
  .then(response => response.json())
  .then(jokes => dispatch({type: "GET_JOKES", payload: jokes})
  );
}

export const getJoke = (id) => {
  return dispatch => fetch(api + `/jokes/${id}`)
  .then(response => response.json())
  .then(joke => dispatch({type: "GET_JOKE", payload: joke}))
}

export const getMyJoke = (id) => {
  return dispatch => fetch(api + `/myjokes/${id}`)
  .then(response => response.json())
  .then(joke => dispatch({type: "GET_MY_JOKE", payload: joke}))
}

export const getMyJokes = () => {
  return dispatch => fetch(api + "/myjokes", {
    headers: {
      "Content-Type" : "application/json",
      "Authorization": localStorage.token
    }})
  .then(response => response.json())
  .then(jokes => dispatch({type: "MY_JOKES", payload: jokes})
  )
}


export const submitJoke = (joke) => {
  return dispatch => fetch(api + "/myjokes", {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify(joke)
  })
  .then(response => response.json())
  .then(joke => dispatch({type: "ADD_JOKE", payload: joke}))
}

export const deleteJoke = (id) =>{
    return dispatch => fetch(api + `/myjokes/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
}


export const clearJoke = () => ({type: "CLEAR_JOKE"})                                                                                     

export const submitSignup = (userData) => {
  return dispatch => fetch(api + '/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => handleData(response, dispatch))
}

export const submitLogin = (userData) => {
  return dispatch => fetch(api + '/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => handleData(response, dispatch))
}

export const autoLogin = () => {
  return dispatch => fetch(api + "/me", {
    headers: {
      "Authorization": localStorage.token
    }
  })
  .then(response => handleData(response, dispatch))
}


export const logout = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({type: "LOGOUT"})
  }
}


function handleData(response, dispatch) {
  if (response.ok) {
   response.json()
   .then(response => {
 localStorage.token = response.token
 dispatch({type: "SET_USER", payload: response.user})
   })
 } else {
   response.json()
   .then(res => alert(res.errors))
 }
}