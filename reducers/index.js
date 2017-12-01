import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks
    case ADD_DECK:
      return {
        ...state,
        [action.title]: { title: action.title, questions: [] },
      }
    case ADD_CARD:
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          questions: [
            ...state[action.deckName].questions,
            { question: action.question, answer: action.answer },
          ],
        },
      }
    default:
      return state
  }
}

export default decks
