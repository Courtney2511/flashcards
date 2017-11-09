import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY, setSeedData } from './_seedData'

// export function getDeck(key) {
//   AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
//     const data = JSON.parse(results)
//     return data[key]
//   })
// }

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}
