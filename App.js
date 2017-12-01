import React from 'react'
import { StyleSheet, Text, View, StatusBar, AsyncStorage } from 'react-native'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/deckList'
import DeckDetail from './components/deckDetail'
import Quiz from './components/quiz'
import AddCard from './components/addCard'
import AddDeck from './components/addDeck'
import { StackNavigator } from 'react-navigation'
import { blue, white } from './utils/colors'
import { setLocalNotification } from './utils/helpers'
import { receiveDecks } from './actions'

const FLASHCARDS_STORAGE_KEY = 'Flashcards:data'

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'a library for managing user interfaces',
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

function FlashStatusBar() {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor={'#fff'} />
    </View>
  )
}

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: 'Flashcards',
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: white,
      },
    },
  },
  DeckDetail: {
    screen: DeckDetail,
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
  AddCard: { screen: AddCard },
  AddDeck: { screen: AddDeck },
})

const store = createStore(reducer)

const receiveState = () => {
  const state = JSON.stringify(store.getState())
  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, state)
}

store.subscribe(receiveState)

const loadState = () => {
  AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => JSON.parse(results))
    .then(state => store.dispatch(receiveDecks(state ? state : initialState)))
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
    loadState()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlashStatusBar />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
