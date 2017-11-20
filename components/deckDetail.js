import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class DeckDetail extends Component {
  render() {
    const { deck } = this.props.navigation.state.params
    console.log(this.props.navigation.state.params)
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4286f4',
    alignItems: 'center',
  },
})
