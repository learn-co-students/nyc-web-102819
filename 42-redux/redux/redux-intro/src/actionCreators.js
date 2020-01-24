const LIKE = "LIKE";
const DISLIKE = "DISLIKE";
const TOGGLE = "TOGGLE";
const HANDLE_CHANGE = "HANDLE_CHANGE";
const ADD_TEXT = "ADD_TEXT";
const RAINBOW = "RAINBOW";

const likeCreator = () => ({type: LIKE})
const dislikeCreator = () => ({type: DISLIKE})
const toggleCreator = () => ({type: TOGGLE})
const handleChangeCreator = (text) =>({type: HANDLE_CHANGE, payload: { text }})
const addTextCreator = () => ({type: ADD_TEXT})
const rainbowCreator = () => ({type: RAINBOW})

export {
    likeCreator, 
    dislikeCreator,
    toggleCreator,
    handleChangeCreator,
    addTextCreator,
    rainbowCreator
}



