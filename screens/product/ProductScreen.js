import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductList from '../../components/product/ProductList';
import HeaderComponent from '../../components/shared/Header';

import { DUMMY_PRODUCT_DATA } from '../../data';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(DUMMY_PRODUCT_DATA);

    return () => {
      setProducts([]);
    };
  }, []);

  const productList = (itemData) => {
    return <ProductList item={itemData?.item} />;
  };

  return (
    <View style={styles.container}>
      <HeaderComponent />
      <FlatList
        numColumns={2}
        data={DUMMY_PRODUCT_DATA}
        keyExtractor={(item) => item._id['$oid']}
        renderItem={productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    alignItems: 'center',
    backgroundColor: 'gainsboro',
  },
});

export default ProductScreen;
