import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Splash } from './src/pages/Splash'
import { SignIn } from './src/pages/SignIn'
import { Feed } from './src/pages/Feed'

import { Amplify, Auth, Hub } from 'aws-amplify'
import awsExports from './src/aws-exports'

Amplify.configure(awsExports)

const Tab = createBottomTabNavigator();

export default function App() {

  const [signInState, setSignInState] = useState("loading");

  useEffect(() => {
    console.log("Fetching user")
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log("app start current user: " + user.getUsername())
      setSignInState("signedIn")
    } catch (e) {
      console.log("not logged in buddy")
      setSignInState("signIn")
    }
  }

  Hub.listen('auth', (data) => {
    const event = data.payload.event
    console.log('Hub: event:', event)
    if (event === "signIn") {
      const user = data.payload.data
      console.log('Hub: username: ' + user.getUsername())
    }
  });

  if (signInState == "loading") {
    return <Splash />
  }

  if (signInState == "signIn") {
    return <SignIn />
  }

  if (signInState == "signedIn") {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Scroll</Text>
        <NavigationContainer>
          <Tab.Navigator screenOptions={default_options}>
            <Tab.Screen name="Home" component={Feed} />
            <Tab.Screen name="Create" component={Feed} />
            <Tab.Screen name="Profile" component={Feed} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }

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
