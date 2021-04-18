/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './components/Home';
import Profile from './components/Profile';
import Liked from './components/Liked';
import Details from './components/Details';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      style: styles.tabBar,
      activeTintColor: colors.orange,
      inactiveTintColor: colors.gray,
      showLabel: false,
    }}
    >
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarIcon: ({color}) => <Entypo name='home' size={32} color={color} />
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon: ({color}) => (
          <Entypo name="home" size={32} color={color} />
        ),
      }}
      />
      <Tab.Screen name="Liked" component={Liked}
      options={{
        tabBarIcon: ({color}) => (
          <Entypo name="heart" size={32} color={color} />
        ),
      }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
