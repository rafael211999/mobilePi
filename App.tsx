import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Card from './src/components/card/Card';
import InputData from './src/components/inputData/inputData';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <StatusBar />
          <Text>Rafael Alves de souza</Text>
          <Card />
          <InputData />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 50,
    padding: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
