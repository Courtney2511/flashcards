import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getDecks } from '../utils/api'

export default class DeckList extends Component {
  componentDidMount() {
    getDecks().then(result => console.log(result))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text>Deck 1</Text>
        </View>
        <View>
          <Text>Deck 2</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4286f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deck: {
    backgroundColor: '#fff',
  },
})
