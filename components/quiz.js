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

  render() {
    const { decks } = this.props
    const { questions } = this.props.decks[
      this.props.navigation.state.params.deckName
    ]
    const { navigate } = this.props.navigation

    if (questions.length == 0) {
      return (
        <View style={styles.container}>
          <Text>Please add cards to start quiz</Text>
        </View>
      )
    }

    if (this.state.index > questions.length - 1) {
      return (
        <View style={styles.container}>
          <Text>
            Correct Answers: {this.state.correct} out of {questions.length}
          </Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (this.state.toggleCard === 'question') {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text>{questions[this.state.index].question}</Text>
          </View>
          <TouchableOpacity onPress={() => this.showAnswer()}>
            <Text style={styles.textButton}>Show Answer</Text>
          </TouchableOpacity>
          <Text>
            Questions remaining: {questions.length - this.state.index}
          </Text>
        </View>
      )
    }
    if (this.state.toggleCard === 'answer') {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text>{questions[this.state.index].answer}</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.correct()}
            >
              <Text>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.incrementIndex()}
            >
              <Text>Incorrect</Text>
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
