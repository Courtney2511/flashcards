import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'Flashcards:data'

export function setSeedData() {
  let seedData = {
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

  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(seedData))
  return seedData
}
