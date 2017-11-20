import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

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
        <View style={styles.controls}>
          <TouchableOpacity
            onPress={() => console.log('Quiz')}
            style={styles.button}
          >
            <Text>Start Quiz</Text>
            <Entypo name="controller-play" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Add Card</Text>
            <Entypo name="plus" />
          </TouchableOpacity>
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
  controls: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },
  button: {
    borderRadius: 7,
    backgroundColor: '#bc42f4',
    margin: 20,
    padding: 10,
  },
})
