import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default class todoItem extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    console.log(" todo Item", this.props)
    return (
      <View style={items.container}>
        <Text style={items.todoTitle}>
          {item.title}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/delete.png')} style={items.delete_btn} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Image source={require('../assets/edit.png')} style={items.edit_btn} />
        </TouchableOpacity>
      </View>)
  }
}


const items = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 10,
    borderRadius: 10
  },
  delete_btn: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignItems: 'center'
  },
  todoTitle: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  edit_btn: {
    width: 30,
    height: 30,
    marginRight: 5
  }

});
