import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    index: 0,
    toggleCard: 'question',
  }

  showAnswer() {
    console.log('button pressed')
    this.setState(state => {
      return {
        ...state,
        toggleCard: 'answer',
      }
    })
    console.log('made it here')
  }

  incrementIndex() {
    this.setState(state => {
      return {
        ...state,
        toggleCard: 'question',
        index: state.index + 1,
      }
    })
  }

  render() {
    const { decks } = this.props
    const { questions } = this.props.decks[
      this.props.navigation.state.params.deckName
    ]
    if (this.state.index > questions.length - 1) {
      return (
        <View>
          <Text>finished!</Text>
        </View>
      )
    }
    if (this.state.toggleCard === 'question') {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text>{questions[this.state.index].question}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.showAnswer()}
          >
            <Text>Show Answer</Text>
          </TouchableOpacity>
        </View>
      )
    }
    if (this.state.toggleCard === 'answer') {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text>{questions[this.state.index].answer}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.incrementIndex()}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    decks: state,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#4286f4',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 7,
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

export default connect(mapStateToProps)(Quiz)
