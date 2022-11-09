import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, VirtualizedList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/components/HomeScreen';

import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={default_options}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Create" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Scroll</Text>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const default_options = {
  headerShown: false,
  tabBarLabel: '●',
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: '#000',
  },
  // headerStyle: {
  //   backgroundColor: '#000',
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   color: '#fff',
  //   fontSize: 32,
  //   fontWeight: 'bold',
  //   padding: 6,
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    padding: 6,
  },
  scrollView: {
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
});
