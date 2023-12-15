import { useEffect } from 'react';

import { Stack } from "expo-router"
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    let [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError])

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen name="index" options={{ title: 'Mobile App Test' }} />
        </Stack>
    )
}
``