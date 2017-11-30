import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { red } from '../utils/colors'

class Quiz extends Component {
  state = {
    index: 0,
    toggleCard: 'question',
    correct: 0,
  }

  showAnswer() {
    this.setState(state => {
      return {
        ...state,
        toggleCard: 'answer',
      }
    })
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

  correct() {
    this.incrementIndex()
    this.setState(state => {
      return {
        ...state,
        correct: state.correct + 1,
      }
    })
  }

  resetQuiz() {
    this.setState(state => {
      return {
        ...state,
        index: 0,
        correct: 0,
      }
    })
  }

  render() {
    const { decks } = this.props
    const { questions } = this.props.decks[
      this.props.navigation.state.params.deckName
    ]
    const { navigate } = this.props.navigation

    // displays if deck is empty
    if (questions.length == 0) {
      return (
        <View style={styles.container}>
          <Text>Please add cards to start quiz</Text>
        </View>
      )
    }

    // displays final score when questions have all been displayed
    if (this.state.index > questions.length - 1) {
      return (
        <View style={styles.container}>
          <Text>
            You got {this.state.correct} out of {questions.length} right!
          </Text>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => this.resetQuiz()}
              style={styles.button}
            >
              <Text>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.button}
            >
              <Text>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    // displays question side of the card
    if (this.state.toggleCard === 'question') {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={{ color: '#fff' }}>
              {questions[this.state.index].question}
            </Text>
          </View>
          <TouchableOpacity onPress={() => this.showAnswer()}>
            <Text style={styles.textButton}>Show Answer</Text>
          </TouchableOpacity>
          <Text>
            {questions.length - (this.state.index + 1)} questions left
          </Text>
        </View>
      )
    }

    // displays answer side of the card
    if (this.state.toggleCard === 'answer') {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={{ color: '#fff' }}>
              {questions[this.state.index].answer}
            </Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'green' }]}
              onPress={() => this.correct()}
            >
              <Text style={{ color: 'white' }}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'red' }]}
              onPress={() => this.incrementIndex()}
            >
              <Text style={{ color: 'white' }}>Incorrect</Text>
            </TouchableOpacity>
          </View>
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
  row: {
    flexDirection: 'row',
  },
  textButton: {
    color: red,
    marginTop: 10,
    padding: 20,
  },
  button: {
    marginTop: 30,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 7,
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
})

export default connect(mapStateToProps)(Quiz)
