import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    getDecks().then(decks => dispatch(receiveDecks(decks)))
  }

  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        {decks &&
          Object.keys(decks).map(deck => {
            return (
              <View key={decks[deck].title} style={styles.deck}>
                <Text>{decks[deck].title}</Text>
              </View>
            )
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
    flex: 1,
    backgroundColor: '#4286f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deck: {
    backgroundColor: '#fff',
  },
})
