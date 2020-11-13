import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/Home';
import SecondScreen from './screens/SecondScreen';

const Root = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Root.Navigator>
          <Root.Screen name="Home" component={HomeScreen} />
          <Root.Screen name="Screen2" component={SecondScreen} />
        </Root.Navigator>
      </NavigationContainer>
  );
}
