import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class AddDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      error: null,
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    if (this.state.name === '') {
      this.setState({ error: 'Please enter name' })
      return
    }
    this.props.addDeck(this.state.name)
    this.props.navigation.navigate('DeckDetail', { deckName: this.state.name })
  }

  render() {
    const { error } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          placeholder="Enter Deck "
          keyboardType="default"
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <TouchableHighlight onPress={this.onSubmit} style={styles.button}>
          <Text>ADD DECK</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: title => dispatch(addDeck(title)),
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
    marginTop: 30,
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

export default connect(() => ({}), mapDispatchToProps)(AddDeck)
