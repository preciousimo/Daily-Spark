import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function AnimationScreen() {
    const animation = useRef<LottieView>(null);
    useEffect(() => {
    }, []);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                // autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('@assets/lottie/netflix.json')}
            />

            <View style={styles.buttonContainer}>
                <Button title="Play" onPress={() => { animation.current?.play();}} />
                <Button title="Pause" onPress={() => { animation.current?.pause();}} />
                <Button title="Reset" onPress={() => { animation.current?.reset();}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
       
    },
    buttonContainer: {
       
    },
});
