import { StyleSheet, Text, View } from 'react-native';
import ProductListItem from './ProductListItem';

const ProductList = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <ProductListItem {...item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    width: 150,
    height: 150,
    borderWidth: 2,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default ProductList;
