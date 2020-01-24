const LIKE = "LIKE";
const DISLIKE = "DISLIKE";
const TOGGLE = "TOGGLE";
const HANDLE_CHANGE = "HANDLE_CHANGE";
const ADD_TEXT = "ADD_TEXT";

const likeCreator = () => ({type: LIKE})
const handleChangeCreator = (text) =>({type: HANDLE_CHANGE, payload: { text }})


export {
    likeCreator, 
    handleChangeCreator
}



