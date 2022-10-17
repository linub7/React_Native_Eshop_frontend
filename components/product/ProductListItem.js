import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

const ProductListItem = ({ name, price, image, countInStock }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: image
            ? image
            : 'https://m.media-amazon.com/images/I/31D2hTX7j4L.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>
      <Text style={styles.price}>${price}</Text>

      {countInStock > 0 ? (
        <Pressable style={styles.countInStockContainer}>
          <Text style={styles.btn}>Add</Text>
        </Pressable>
      ) : (
        <Text style={styles.unavailabilityText}>Currently Unavailable</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: 'white',
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -35,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: 'transparent',
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'orange',
    marginTop: 10,
  },
  countInStockContainer: {
    marginBottom: 60,
  },
  btn: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  unavailabilityText: {
    marginTop: 20,
  },
});

export default ProductListItem;
