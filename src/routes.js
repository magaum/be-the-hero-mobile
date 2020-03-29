import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

import Caso from './Pages/Caso';
import Detalhe from './Pages/Detalhe';

export default function Routes() {
  return (
    <NavigationContainer >

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Casos" component={Caso}></AppStack.Screen>
        <AppStack.Screen name="Detalhes" component={Detalhe}></AppStack.Screen>
      </AppStack.Navigator>

    </NavigationContainer>
  )
}