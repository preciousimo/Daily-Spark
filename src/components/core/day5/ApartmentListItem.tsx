import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ApartmentListItem({ apartment }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: apartment.image }} style={styles.image} />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{apartment.title}</Text>
                <Text style={styles.description}>Enjoy exclusive pleasure in the most suitable apartment.</Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>₦{apartment.price}/Night</Text>
                    <Text style={styles.price}>
                        ★{apartment.rating}({apartment.numberOfStars})
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom:70,
        left: 10,
        right: 10,

        flexDirection: 'row',
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: 150,
        aspectRatio: 1,
    },
    title: {
        fontFamily: 'InterBold',
        marginBottom: 10,
        fontSize: 16,
    },
    description: {
        color: 'gray',
    },
    price: {
        fontFamily: 'InterBold',
    },
    rightContainer: {
        padding: 10,
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
})