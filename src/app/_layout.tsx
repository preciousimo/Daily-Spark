import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from "expo-router"
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

import * as SplashScreen from 'expo-splash-screen';
import AnimatedSplashScreen from '@/components/core/day4/AnimatedSplashScreen';

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [appReady, setAppReady] = useState(false);
    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_400Regular,
        InterBold: Inter_700Bold,
        InterSemi: Inter_600SemiBold,
        InterBlack: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            // SplashScreen.hideAsync();
            setAppReady(true);
        }
    }, [fontsLoaded, fontError])

    if (!appReady || !splashAnimationFinished) {
        return(
            <AnimatedSplashScreen 
                onAnimationFinish={(isCancelled) => {
                    if(!isCancelled) {
                        setSplashAnimationFinished(true)
                    }
                }} 
            />
        )
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{}}>
                <Stack.Screen name="index" options={{ title: 'Mobile App Test' }} />
            </Stack>
        </GestureHandlerRootView>
    )
}
``