import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryWidget from '../components/CategoryWidget'
// Components
import Header from '../components/Header'
import NearbyWidget from '../components/NearbyWidget'

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <CategoryWidget />
        <NearbyWidget />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 18
  }
})

export default HomeScreen
