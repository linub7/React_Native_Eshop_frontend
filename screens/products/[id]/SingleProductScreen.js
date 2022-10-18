import { Text, View } from 'react-native';

const SingleProductScreen = ({ route }) => {
  console.log(route.params.productId);
  return (
    <View>
      <Text>Single Product</Text>
    </View>
  );
};

export default SingleProductScreen;
