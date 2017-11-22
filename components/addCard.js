import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export default class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
    }
  }
  render() {
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
      </View>
    )
  }
}
