import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Exercicio1 from './Exercicio1';
import Exercicio2 from './Exercicio2';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>

      <Exercicio2/>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
