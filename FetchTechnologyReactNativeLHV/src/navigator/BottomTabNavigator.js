import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet, Image } from 'react-native'

import HomeScreen from '../views/Home/HomeScreen';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>

      {/* Tab 1 */}
      <Tab.Screen name="home" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/img/home.png')} style={{
              width: 20,
              height: 20
            }}></Image>
          ), tabBarLabel: () => { return null },
        }} />

      {/* Tab 2 */}
      <Tab.Screen name="notify" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/img/notify.png')} style={{
              width: 20,
              height: 20
            }}></Image>
          ), tabBarLabel: () => { return null },
          tabBarBadge: () => {
            return (
              <View style={{ position: 'absolute', right: 5, top: 5, backgroundColor: 'red', borderRadius: 2, width: 4, height: 4, justifyContent: 'center', }}>

              </View>
            );
          },
        }} />

      {/* Tab 3 */}
      <Tab.Screen name="category" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/img/category.png')} style={{
              width: 20,
              height: 20
            }}></Image>
          ), tabBarLabel: () => { return null }
        }} />

      {/* Tab 4 */}
      <Tab.Screen name="profile" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/img/profile.png')} style={{
              width: 20,
              height: 20
            }}></Image>
          ), tabBarLabel: () => { return null },
        }} />

    </Tab.Navigator>

  )
}

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
})

export default BottomTabNavigator