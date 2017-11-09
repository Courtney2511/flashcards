import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import DeckList from './components/deckList'

function FlashStatusBar() {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor={'#fff'} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashStatusBar />
        <DeckList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
