import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './components/shared/HeaderComponent';
import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: 'gainsboro',
  },
});
