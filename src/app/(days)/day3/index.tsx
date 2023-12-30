import MarkdownDisplay from "@/components/core/day3/MarkdownDisplay"
import { Stack, Link } from "expo-router"
import { Button } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

const description = `
# Markdown

Render Markdown in in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day3/editor" asChild>
        <Button title="Go to editor" />
      </Link>
    </SafeAreaView>
  )
}
