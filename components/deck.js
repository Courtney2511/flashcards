import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import DeckDetail from './deckDetail'

export default class Deck extends Component {
  render() {
    const { deck } = this.props

    return (
      <TouchableOpacity
        onPress={() =>
          console.log(
            'props',
            this.props.navigate('DeckDetail', { deck: this.props.deck })
          )}
        style={styles.container}
      >
        <Text style={styles.font}> {deck.title} </Text>
        <Text style={styles.font}> # of cards: {deck.questions.length}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    borderRadius: 2,
    backgroundColor: '#4286f4',
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  font: {
    color: '#fff',
  },
})
