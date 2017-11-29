import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux'

class DeckDetail extends Component {
  render() {
    const { decks } = this.props
    const { deckName } = this.props.navigation.state.params
    const { navigation } = this.props
    const deck = decks[deckName]
    let card

    if (deck.questions.length === 1) {
      card = 'card'
    } else {
      card = 'cards'
    }

    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.title}>{deck.title.toUpperCase()}</Text>
          <MaterialCommunityIcons
            style={styles.icon}
            name="cards"
            size={30}
            style={{ color: '#fff' }}
          />
          <Text style={{ color: '#fff' }}>
            {deck.questions.length} {card}
          </Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Quiz')}
            style={styles.button}
          >
            <Text style={{ color: '#fff' }}>Start Quiz</Text>
            <Entypo name="controller-play" style={{ color: '#fff' }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AddCard', {
                deckName: this.props.navigation.state.params.deckName,
              })
            }
            style={styles.button}
          >
            <Text style={{ color: '#fff' }}>Add Card</Text>
            <Entypo name="plus" style={{ color: '#fff' }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(DeckDetail)

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
    color: '#fff',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
})
