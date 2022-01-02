const initialJoke = {
  id: null,
  joke: '',
  joke_id: ''
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
    case "CLEAR_JOKE":
      return {...state, selectedJoke: initialJoke}
    case "SET_USER":
      return {...state, user: action.payload}
    default:
      return {...state}
  }
}