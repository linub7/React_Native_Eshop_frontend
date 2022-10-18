import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';

import ProductList from '../../components/product/ProductList';
import { DUMMY_PRODUCT_DATA, DUMMY_CATEGORIES_DATA } from '../../data';
import HeaderComponent from '../../components/shared/HeaderComponent';
import Banner from '../../components/shared/Banner';
import CategoryList from '../../components/categories/CategoryList';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    setProducts(DUMMY_PRODUCT_DATA);
    setCategories(DUMMY_CATEGORIES_DATA);

    return () => {
      setProducts([]);
      setCategories([]);
    };
  }, []);

  const productList = (itemData) => {
    return (
      <ScrollView>
        <ProductList item={itemData?.item} />
      </ScrollView>
    );
  };

  const categoryList = (itemData) => {
    return (
      <CategoryList
        item={itemData.item}
        isActiveCategory={isActiveCategory}
        setIsActiveCategory={setIsActiveCategory}
        handleSelectCategory={handleSelectCategory}
        activeCategory={activeCategory}
      />
    );
  };

  const handleSearch = () => {
    const searchResult = products.filter((prod) => {
      return prod.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    (searchTerm !== '' || searchResult.length > 0) &&
      setFilteredProducts(searchResult);
  };

  const handleSelectCategory = (item) => {
    if (item.name === 'All') {
      setFilteredProducts([]);
      return;
    }
    const activeCat = categories.find(
      (category) => category._id['$oid'] === item._id['$oid']
    );
    setActiveCategory(activeCat);

    const categoryRelatedResult = products.filter((prod) => {
      console.log({ productsCat: prod.category['$oid'].toString() });
      console.log({ itemCat: item._id['$oid'] });
      return prod.category['$oid'].toString() === item?._id['$oid'].toString();
    });

    setFilteredProducts(categoryRelatedResult);
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
        handleSearch={handleSearch}
        setFilteredProducts={setFilteredProducts}
        setSearchTerm={setSearchTerm}
      />
      <View>
        <Banner />
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.name}
          renderItem={categoryList}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          numColumns={2}
          data={filteredProducts.length > 0 ? filteredProducts : products}
          keyExtractor={(item) => item._id['$oid']}
          renderItem={productList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    marginLeft: 10,
  },
});

export default ProductScreen;
