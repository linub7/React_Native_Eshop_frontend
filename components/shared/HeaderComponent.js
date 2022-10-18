import { Image, StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderComponent = ({
  searchTerm,
  handleSearchTermChange,
  handleSearch,
  setFilteredProducts,
  setSearchTerm,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.searchContainer}>
        <Ionicons name="ios-search" size={18} />
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={searchTerm}
          onChangeText={handleSearchTermChange}
          onEndEditing={handleSearch}
        />
        {searchTerm !== '' && (
          <Ionicons
            name="ios-close"
            size={18}
            onPress={() => {
              setSearchTerm('');
              setFilteredProducts([]);
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: 'gainsboro',
    height: 50,
    marginLeft: 10,
  },
  logo: {
    height: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    height: 35,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default HeaderComponent;
