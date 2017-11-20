import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default class DeckDetail extends Component {
  render() {
    const { deck } = this.props.navigation.state.params
    console.log(this.props.navigation.state.params)
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.title}>{deck.title.toUpperCase()}</Text>
          <MaterialCommunityIcons style={styles.icon} name="cards" size={30} />
          <Text>{deck.questions.length} cards</Text>
        </View>
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
  deck: {
    backgroundColor: '#4286f4',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 7,
  },
  icon: {
    margin: 5,
  },
  title: {
    fontSize: 20,
  },
})
