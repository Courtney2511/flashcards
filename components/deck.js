import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import DeckDetail from './deckDetail'

export default class Deck extends Component {
  render() {
    const { deck } = this.props

    let card

    if (deck.questions.length === 1) {
      card = 'card'
    } else {
      card = 'cards'
    }

    return (
      <TouchableOpacity
        onPress={() =>
          console.log(
            'props',
            this.props.navigate('DeckDetail', {
              deckName: this.props.deck.title,
            })
          )
        }
        style={styles.container}
      >
        <Text style={styles.font}> {deck.title} </Text>
        <Text style={styles.font}>
          {deck.questions.length} {card}
        </Text>
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
