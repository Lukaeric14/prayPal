import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import Page1Screen from '../screens/Page1Screen';
import Page3Screen from '../screens/Page3Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Pray') {
              iconName = focused ? 'Pray' : 'home-outline';
            } else if (route.name === 'Page1') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            } else if (route.name === 'Page2') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
                <Tab.Screen name="Page1" component={Page1Screen} />
        <Tab.Screen name="Pray" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Page3Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
