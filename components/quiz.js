import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    index: 0,
  }

  render() {
    const { decks } = this.props
    const { questions } = this.props.decks[
      this.props.navigation.state.params.deckName
    ]
    return (
      <View>
        <Text>Quiz</Text>
        <Text>{questions[this.state.index].question}</Text>
        <TouchableOpacity>
          <Text>Show Answer</Text>
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

export default connect(mapStateToProps)(Quiz)
