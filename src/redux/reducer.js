const initialJoke = {
  id: null,
  joke_setup: '',
  joke_punchline: '',
  joke_id: '',

}



const initialState = {
  jokes: [],
  selectedJoke: initialJoke,
  user: {
    username: ''
  }
}

export default function reducer(state=initialState, action){
  switch (action.type){
    case "GET_JOKES":
      return {...state, jokes: action.payload};
    case "GET_JOKE":
      return {...state, selectedJoke: action.payload}
    case "MY_JOKES":
      return {...state, jokes: action.payload}
    case "GET_MY_JOKE":
      return {...state, selectedJoke: action.payload}
    case "ADD_JOKE":
      return {...state, jokes:[...state.jokes, action.payload] }  
    case "DELETE_JOKE":
      return {...state, selectedJoke: initialJoke}
    case "CLEAR_JOKE":
      return {...state, selectedJoke: initialJoke}
    case "SET_USER":
      return {...state, user: action.payload}
    case "LOGOUT":
      return {...state, user: {username: ''}}
    default:
      return {...state}
  }
}