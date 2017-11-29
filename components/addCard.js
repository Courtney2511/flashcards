import React, { Component } from 'react'
import { View, TextInput, TouchableHighlight, Text } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'

class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
    }
  }

  onSubmit() {
    const deckName = this.props.navigation.state.params
    const { question, answer } = this.state
    this.props.addCard(deckName, question, answer)
  }

  render() {
    console.log('deck:', this.props.navigation.state.params.deckName)
    return (
      <View>
        <TextInput
          style={{
            height: 80,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
          placeholder="Question"
          multiline={true}
        />
        <TextInput
          style={{ height: 80, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
          placeholder="Answer"
          multiline={true}
        />
        <TouchableHighlight>
          <Text>ADD CARD</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCard: () => dispatch(addCard()),
  }
}

export default connect(() => ({}), mapDispatchToProps)(AddCard)
