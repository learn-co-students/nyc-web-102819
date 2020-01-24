
let defaultState = {
    likes: 0,
    text: "",
    darkMode: false,
    thangs: []
  }

let reducer = (prevState=defaultState, action) => {
    switch(action.type){
        case 'LIKE': 
          return {...prevState, likes: prevState.likes + 1}
        case 'DISLIKE': 
          return {...prevState, likes: prevState.likes - 1}
        case 'TOGGLE': 
          return {...prevState, darkMode: !prevState.darkMode }
        case 'HANDLE_CHANGE': 
          // return {...prevState, ...action.payload }
          // DO YOUR CALCULATIONS HERE
          return {...prevState, text: action.payload.text }
        case 'ADD_TEXT': 
          return {...prevState, text: "", thangs: [...prevState.thangs, prevState.text] }
        default: 
          return {...prevState}
    }
}

export default reducer;
