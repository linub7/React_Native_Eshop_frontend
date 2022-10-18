import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import CartScreen from '../screens/cart/CartScreen';
import AdminScreen from '../screens/admin/AdminScreen';
import UserScreen from '../screens/user/UserScreen';
import ProductScreen from '../screens/products/ProductScreen';
import SingleProductScreen from '../screens/products/[id]/SingleProductScreen';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Product"
      screenOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        tabBarActiveTintColor: '#e91d63',
      }}
    >
      <BottomTab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
          headerTitleAlign: 'center',
        }}
      />
      <BottomTab.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
          headerTitleAlign: 'center',
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </BottomTab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
