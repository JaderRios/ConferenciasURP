import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './stacks/HomeStack';
import { LoginStack } from './stacks/LoginStack';
import { COLOR_PRIMARIO, COLOR_SECUNDARIO } from '../utils/constantes';
import Icon from '../components/Icon';
import { FavoritoStack } from './stacks/FavoritoStack';
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'LoginStack'}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: COLOR_PRIMARIO,
          tabBarInactiveTintColorL: COLOR_SECUNDARIO,
          tabBarIcon: ({ color, size }) => screenOptions(route, color, size)
        })}
      >
        <Tab.Screen
          name={'LoginStack'}
          component={LoginStack}
          options={{
            title: 'Cuenta',
            headerShown: false,
            tabBarStyle: { display: 'none' }
          }}
        />
        <Tab.Screen name={'HomeStack'} component={HomeStack} options={{ title: ' CONFERENCIAS', headerShown: false }} />
        <Tab.Screen
          name={'FavoritoStack'}
          component={FavoritoStack}
          options={{ title: ' FAVORITOS', headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color, size) {
  let iconName;
  if (route.name === 'LoginStack') {
    iconName = 'user';
  }
  if (route.name === 'HomeStack') {
    iconName = 'home';
  }
  if (route.name === 'FavoritoStack') {
    iconName = 'heart';
  }
  return <Icon color={color} size={size} name={iconName} />;
}
