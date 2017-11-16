import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setSeedData } from './utils/_seedData'
import DeckList from './components/deckList'

function FlashStatusBar() {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor={'#fff'} />
    </View>
  )
}

export default class App extends React.Component {
  componentDidMount() {
    setSeedData()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <FlashStatusBar />
          <DeckList />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})
