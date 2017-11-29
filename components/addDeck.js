import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class AddDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    console.log(this.props)
    this.props.addDeck(this.state.name)
    console.log(this.props.navigation)
    this.props.navigation.navigate('Home')
  }

  render() {
    console.log(this.props.deckName)
    return (
      <View>
        <KeyboardAvoidingView>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 10,
            }}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder="Name"
            keyboardType="default"
            underlineColorAndroid="rgba(0,0,0,0)"
          />
          <TouchableHighlight onPress={this.onSubmit}>
            <Text>ADD DECK</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: title => dispatch(addDeck(title)),
  }
}

export default connect(() => ({}), mapDispatchToProps)(AddDeck)
