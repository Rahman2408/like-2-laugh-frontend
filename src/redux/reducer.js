const initialJoke = {
  id: null,
  joke: '',
  joke_id: ''
}

const initialState = {
  jokes: [],
  selectedJoke: initialJoke
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
      console.log("santized")
      return {...state, selectedJoke: initialJoke}
    default:
      return {...state}
  }
}