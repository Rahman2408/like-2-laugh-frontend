const initialState = {
  jokes: []
}

export default function reducer(state=initialState, action){
  switch (action.type){
    case "GET_JOKES":
      return {...state, jokes: action.payload};
    default:
      return {...state}
  }
}