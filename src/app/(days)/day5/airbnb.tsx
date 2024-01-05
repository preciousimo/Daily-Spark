import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';

export default function AirbnbScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        style={styles.map}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      >
        <Marker
            coordinate={{latitude: 37.78825, longitude: -122.4324,}}
            title='2bd Apartment'
            description='Hello!'
        />
        <Marker
            coordinate={{latitude: 37.78824, longitude: -122.4323,}}
            title='1bd Apartment'
            description='Hello there!'
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
