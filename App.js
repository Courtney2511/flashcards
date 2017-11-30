import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setSeedData } from './utils/_seedData'
import DeckList from './components/deckList'
import DeckDetail from './components/deckDetail'
import Quiz from './components/quiz'
import AddCard from './components/addCard'
import AddDeck from './components/addDeck'
import { StackNavigator } from 'react-navigation'
import { blue, white } from './utils/colors'
import { setLocalNotification } from './utils/helpers'

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

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
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
