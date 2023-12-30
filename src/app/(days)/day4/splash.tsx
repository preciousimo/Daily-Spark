import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';

export default function AnimationScreen() {
    const animation = useRef<LottieView>(null);
    useEffect(() => {
    }, []);

    return (
        <View style={styles.animationContainer}>
            <Stack.Screen options={{ headerShown: false}} />
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: '80%',
                    maxWidth: 400,
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('@assets/lottie/netflix.json')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
});
