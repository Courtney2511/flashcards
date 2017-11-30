import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'a library for managin user interfaces',
      },
      {
        question: 'Where do you make AJAX requests in React?',
        answer: 'the component did mount cycyle',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
}

function decks(state = initialState, action) {
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
