import { PropsWithChildren } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Markdown from 'react-native-markdown-display';

export default function MarkdownDisplay({ children }: PropsWithChildren) {
    return (
        <ScrollView style={styles.page} contentInsetAdjustmentBehavior='automatic'>
            <Markdown style={markdownStyles}>
                {children}
            </Markdown>
        </ScrollView>
    );
};

const markdownStyles = {
    heading1: {
        fontFamily: 'InterBlack',
        color: '#212020',
        marginBottom: 10,
        marginTop: 5,
        lineHeight: 40,
    },
    heading2: {
        fontFamily: 'InterBold',
        color: '#404040',
        marginBottom: 10,
        marginTop: 5,
        lineHeight: 40,
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
    },
};

  

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        borderRadius: 10,
    },
});
