import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

const days = [...Array(30)].map((val, index) => index + 1);

export default function App() {
  return (
    <View style={styles.container}>

      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  content: {
    gap: 10,
  },

  column: {
    gap: 10,
    padding: 10,
  },

  box: {
    backgroundColor: '#F9EDE3',
    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '9b4521',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#9b4521',
    fontSize: 70,
  }
});
