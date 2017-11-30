import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
  Text,
  StyleSheet,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'

class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
      errorQ: null,
      errorA: null,
    }
  }

  onSubmit() {
    const { deckName } = this.props.navigation.state.params
    const { question, answer } = this.state
    if (this.state.question === '') {
      this.setState({ errorQ: 'Please enter a question' })
    } else {
      this.setState({ errorQ: null })
    }
    if (this.state.answer === '') {
      this.setState({ errorA: 'Please enter an answer' })
    } else {
      this.setState({ errorA: null })
    }
    if (!(this.state.question === '') && !(this.state.answer === '')) {
      this.props.addCard(deckName, question, answer)
      this.props.navigation.goBack()
    }
  }

  render() {
    const { errorQ, errorA } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={{
            height: 70,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
          placeholder="Question"
          multiline={true}
        />
        {errorQ && <Text style={styles.error}>{errorQ}</Text>}
        <TextInput
          style={{ height: 70, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
          placeholder="Answer"
          multiline={true}
        />
        {errorA && <Text style={styles.error}>{errorA}</Text>}
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.onSubmit()}
        >
          <Text>ADD CARD</Text>
        </TouchableHighlight>
        <View style={{ padding: 40 }} />
      </KeyboardAvoidingView>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCard: (deckName, question, answer) =>
      dispatch(addCard(deckName, question, answer)),
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 10,
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    borderRadius: 7,
    width: 80,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
  },
})

export default connect(() => ({}), mapDispatchToProps)(AddCard)
