import {
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProductListItem from './ProductListItem';

const ProductList = ({ item }) => {
  return (
    <View style={styles.container}>
      <ProductListItem {...item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    borderWidth: 2,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default ProductList;
