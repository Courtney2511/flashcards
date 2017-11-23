import React, { Component } from 'react'
import { View, TextInput, Text, TouchableHighlight } from 'react-native'

export default class AddDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 20,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          placeholder="Name"
        />
        <TouchableHighlight onPress={() => console.log('pressed')}>
          <Text>ADD DECK</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
