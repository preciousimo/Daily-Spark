import MarkdownDisplay from "@/components/core/day3/MarkdownDisplay"
import { Stack, Link } from "expo-router"
import { Button } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

const description = `
# Animated Splash Screens

Animate Splash Screens in **React Native** using Lottie

📚 Today's Agenda:
- Overview of Splash Screens in Apps
- Setting Up the Default Splash Screen
- Designing a Custom Splash Screen
- Integrating Lottie Animations
- Configuring Lottie with React Native and Expo
- Best Practices for Splash Screen Animations
- Live Q&A Session
`

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Stack.Screen options={{ title: "Day 4: Splashscreen" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day4/animation" asChild>
        <Button title="Go to the animation" />
      </Link>

      <Link href="/day4/splash" asChild>
        <Button title="Splash screen animation" />
      </Link>
    </SafeAreaView>
  )
}
