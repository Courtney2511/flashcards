import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Deck extends Component {
  render() {
    const { deck } = this.props

    return (
      <View style={styles.container}>
        <Text> {deck.title} </Text>
        <Text> # of cards: {deck.questions.length}</Text>
      </View>
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
})
