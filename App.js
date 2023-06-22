import { StyleSheet, Text, View } from 'react-native';
import LogIn from './src/login/login';
import 'react-native-gesture-handler';
import * as React from 'react';
import { useEffect, useState,} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/home/home"
import { createStackNavigator } from '@react-navigation/stack';
import UserContext from './src/UserContext'
import Cart  from './src/cart/cart';

const Stack = createStackNavigator();


export default function App() {
  const [cartProduct,setCartProduct] = useState([])

  return (
<UserContext.Provider value={{cartProduct,setCartProduct}}>

<NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
        
         </UserContext.Provider>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
