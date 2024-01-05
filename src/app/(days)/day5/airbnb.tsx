import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import apartments from '@assets/data/day5/apartments.json'

export default function AirbnbScreen() {
    // Calculate the average latitude and longitude for initial region
    const averageLatitude = apartments.reduce((sum, apt) => sum + apt.latitude, 0) / apartments.length;
    const averageLongitude = apartments.reduce((sum, apt) => sum + apt.longitude, 0) / apartments.length;

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: averageLatitude,
                    longitude: averageLongitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                {apartments.map((apartment) => (
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
                ))}
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
