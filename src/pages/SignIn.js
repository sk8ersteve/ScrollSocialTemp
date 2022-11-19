// import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createUser } from '../graphql/mutations'
import { listUsers } from '../graphql/queries'
// import { useEffect } from 'react';

export const SignIn = () => {

  async function signIn() {

  }

  async function signUp() {
    try {
      await Auth.signUp({
        username: 'steve',
        password: 'password',
        attributes: {
          email: 'stephen.bulldog.thomas3@gmail.com',
        }
      })
      console.log("sign up successful?")
      // transition to confirmSignUp
    } catch (e) {
      console.log("Sign Up failed")
    }
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp('steve', '295568')
      console.log("sign up successful")
      // transition to signIn
    } catch (e) {
      console.log("Sign Up failed")
    }
  }

  async function createUserModel() {
    try {
      await API.graphql(graphqlOperation(createUser, {input: {
        id: 'steve3',
      }}))
      console.log("Create user successful?")
    } catch (e) {
      console.log("Create user failed: " + JSON.stringify(e))
    }
  }

  async function listUserModel() {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers))
      console.log("User owner: " + JSON.stringify(userData.data.listUsers.items))
    } catch (e) {
      console.log("List users failed: " + JSON.stringify(e))
    }
  }

  async function signIn() {
    try {
      await Auth.signIn('steve', 'password')
      console.log("sign in successful")
      console.log("checking sign in")
      const user = await Auth.currentAuthenticatedUser()
      console.log("sign in current user: " + user.getUsername())
    } catch (e) {
      console.log("Sign In failed")
      console.log({ e })
    }
  }

  async function signOut() {
    try {
      await Auth.signOut()
      console.log("signed out successful")
      // transition to feed
    } catch (e) {
      console.log("Sign In failed")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Scroll: Sign In</Text>
      <Button title="Sign Up" onPress={signUp} />
      <Button title="Confirm Sign Up" onPress={confirmSignUp} />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Create User" onPress={createUserModel} />
      <Button title="List Users" onPress={listUserModel} />
    </SafeAreaView>
  );

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
});
