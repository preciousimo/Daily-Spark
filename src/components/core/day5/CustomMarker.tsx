import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

export default function CustomMarker({apartment}) {
  return (
    <Marker
    key={apartment.id.toString()}
    coordinate={{ latitude: apartment.latitude, longitude: apartment.longitude, }}
    title={apartment.title}
    description='Hello!'
>
    <View 
        style={{
            backgroundColor: 'wwhite',
            padding: 5,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 20,
        }}
    >
        <Text style={{fontFamily: 'InterBold'}}>
            ₦ {apartment.price}
        </Text>
    </View>
</Marker>
  )
}