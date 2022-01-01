const initialState = {
  jokes: [],
  selectedJoke: {
    id: 0,
    joke: '',
    joke_id: ''
  }
}

export default function reducer(state=initialState, action){
  switch (action.type){
    case "GET_JOKES":
      return {...state, jokes: action.payload};
    case "GET_JOKE":
      return {...state, selectedJoke: action.payload}
    default:
      return {...state}
  }
}