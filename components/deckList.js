import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'
import Deck from '../components/deck'

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    getDecks().then(decks => dispatch(receiveDecks(decks)))
  }

  render() {
    const { decks } = this.props
    return (
      <View>
        {decks &&
          Object.keys(decks).map(deck => {
            return <Deck key={decks[deck].title} deck={decks[deck]} />
          })}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks,
  }
}

export default connect(mapStateToProps)(DeckList)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4286f4',
  },
})

// <View key={decks[deck].title} style={styles.deck}>
//   <Text>{decks[deck].title}</Text>
// </View>
