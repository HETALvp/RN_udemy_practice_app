
import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './src/screens/ComponentScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ImageScreen from './src/screens/ImageScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import CounterScreen from './src/screens/CounterScreen';
import FormScreen from './src/screens/FormScreen';
import BoxScreen from './src/screens/BoxScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='List' component={ListScreen}/>
        <Stack.Screen name='Component' component={ComponentScreen} />
        <Stack.Screen name='ImageCard' component={ImageScreen}/>
        <Stack.Screen name='ColorScreen' component={ColorScreen}/>
        <Stack.Screen name='SquareScreen' component={SquareScreen}/>
        <Stack.Screen name='CounterScreen' component={CounterScreen}/>
        <Stack.Screen name='FormScreen' component={FormScreen}/>
        <Stack.Screen name='BoxScreen' component={BoxScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


