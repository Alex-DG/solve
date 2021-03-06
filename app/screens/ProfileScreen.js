import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Profile Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  }
});

export default ProfileScreen;
