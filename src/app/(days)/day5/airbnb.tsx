import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useMemo, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Stack } from 'expo-router';
import apartments from '@assets/data/day5/apartments.json';
import CustomMarker from '@/components/core/day5/CustomMarker';
import ApartmentListItem from '@/components/core/day5/ApartmentListItem';

import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

type Apartment = (typeof apartments)[0];

export default function AirbnbScreen() {
    // Calculate the average latitude and longitude for the initial region
    const averageLatitude = apartments.reduce((sum, apt) => sum + apt.latitude, 0) / apartments.length;
    const averageLongitude = apartments.reduce((sum, apt) => sum + apt.longitude, 0) / apartments.length;

    const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: averageLatitude,
        longitude: averageLongitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
    })


    // variables
    const snapPoints = useMemo(() => [80, '50%', '90%'], []);

    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />

            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={mapRegion}
            >
                {apartments.map((apartment) => (
                    <CustomMarker
                        key={apartment.id}
                        apartment={apartment}
                        onPress={() => setSelectedApartment(apartment)}
                    />
                ))}
            </MapView>

            {/* Display selected Apartment */}
            {selectedApartment && (
                <ApartmentListItem
                    apartment={selectedApartment}
                    containerStyle={styles.selectedContainer}
                />
            )}

            <BottomSheet index={0} snapPoints={snapPoints}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.listTitle}>Over {apartments.length} places</Text>
                    <BottomSheetFlatList
                        data={apartments}
                        contentContainerStyle={{ gap: 10, padding: 10 }}
                        renderItem={({ item }) => <ApartmentListItem apartment={item} />}
                    />
                </View>
            </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
    listTitle: {
        textAlign: 'center',
        fontFamily: 'InterSemi',
        fontSize: 16,
        marginVertical: 5,
        marginBottom: 20,
    },
    selectedContainer: {
        position: 'absolute',
        bottom: 100,
        right: 10,
        left: 10,
    },
});