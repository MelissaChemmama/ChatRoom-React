// Première étape, on créé notre initial state
// L'idée pour le créer est de s'inspirer du screenshot (ou maquette) fourni
const initialState = {
  messages: [
    {
      id: 1,
      author: "Super Chat",
      content: "Salut ça va ?",
    },
    {
      id: 2,
      author: "Super Chat",
      content: "T'as pas des super-croquettes ?",
    },
    {
      id: 3,
      author: "Super Chat",
      content: "Stp",
    }
  ],
  inputValue: ''
}

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CHANGE_INPUT_VALUE":
      return {...state, inputValue: action.newValue}

    case "ADD_MESSAGE":
      const newMessage = {
        id: state.messages.length + 1 ,
        author: "Super Chat",
        content: state.inputValue,
      }

      const newArray = [...state.messages, newMessage];

      return { ...state, messages: newArray, inputValue: '' };

    default:
      return state;
  }
}

export default chatReducer;
