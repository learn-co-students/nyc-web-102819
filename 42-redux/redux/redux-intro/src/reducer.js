
 function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
  }

let defaultState = {
    likes: 2000,
    text: "Dolla Dolla Bills Yall",
    darkMode: true,
    thangs: ['benjamins baby'],
    color: random_rgba()
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
        case 'RAINBOW':
            return {...prevState, color: random_rgba()}
        default: 
          return {...prevState}
    }
}

export default reducer;
