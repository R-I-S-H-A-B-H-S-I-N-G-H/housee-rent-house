import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NearbyList } from '../utils/NearbyList'
import { colors } from '../utils/Styles'
import NearbyItem from './NearbyItem'

function NearbyWidget (props) {
  const navigation = useNavigation()
  return (
    <View style={styles.nearbyContainer}>
      <Text style={{ fontFamily: 'Sofia-Bold', fontSize: 24, color: colors.black }}>Nearby</Text>
      <View style={{ width: '100%', borderWidth: 1, marginVertical: 18, borderColor: colors.greyLight }} />
      {NearbyList.map((item, index) => {
        return <NearbyItem key={index} item={item} navigation={navigation} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  nearbyContainer: {
    flexDirection: 'column',
    marginTop: 18
  }
})

export default NearbyWidget
