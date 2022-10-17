import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: 50,
  },
});

export default HeaderComponent;
