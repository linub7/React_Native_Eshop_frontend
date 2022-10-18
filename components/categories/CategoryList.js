import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CategoryList = ({ item, handleSelectCategory, activeCategory }) => {
  return (
    <TouchableOpacity onPress={() => handleSelectCategory(item)}>
      <View style={styles.container}>
        <Text
          style={[
            styles.item,
            activeCategory?.name === item.name && styles.activeItem,
          ]}
        >
          {item?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  item: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
    borderColor: '#fff',
  },
  activeItem: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'orange',
    color: '#000',
    borderColor: '#fff',
  },
});

export default CategoryList;
