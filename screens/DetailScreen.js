import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DetailScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Hello Detail Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default DetailScreen
