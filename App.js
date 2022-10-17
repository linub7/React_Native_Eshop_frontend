import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './components/shared/Header';

import ProductScreen from './screens/product/ProductScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
