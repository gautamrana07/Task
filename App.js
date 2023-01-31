import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './src/Product/Product';
import Cart from './src/Card/Cart';
import ViewDetail from './src/Product/ViewDetail'


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer><Stack.Navigator initialRouteName="Imagess">
      <Stack.Screen name="Products" component={Product} />
      <Stack.Screen name="Carts" component={Cart} />
      <Stack.Screen name="ViewDetail" component={ViewDetail} />


      
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App