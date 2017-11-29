import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY, setSeedData } from './_seedData'

// export function addDeck(name) {
//   const newName = JSON.stringify({ [name]: {} })
//   AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, newName)
// }
//
// export function getDeck(key) {
//   getDecks().then(data => data[key])
// }
//
// export function getDecks() {
//   return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results =>
//     JSON.parse(results)
//   )
// }
