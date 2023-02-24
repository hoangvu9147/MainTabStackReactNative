import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../views/Home/HomeScreen';

import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const drawerScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator">
        
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};


const DrawerNavigation = (props) => {
  return (
    <Stack.Navigator >

      <Stack.Screen name="drawerScreenStack" component={drawerScreenStack} options={{headerShown: false}} />

    </Stack.Navigator>
  );
};

export default DrawerNavigation;
