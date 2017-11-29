import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Entypo } from '@expo/vector-icons'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'
import Deck from '../components/deck'
import { blue, gold, white } from '../utils/colors'

class DeckList extends Component {
  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        {decks &&
          Object.keys(decks).map(deck => {
            return (
              <Deck
                key={decks[deck].title}
                deck={decks[deck]}
                navigate={this.props.navigation.navigate}
              />
            )
          })}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('AddDeck')}
        >
          <Entypo name="plus" style={{ color: blue }} />
          <Text>Add Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(DeckList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    borderRadius: 7,
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
})

// <View key={decks[deck].title} style={styles.deck}>
//   <Text>{decks[deck].title}</Text>
// </View>
