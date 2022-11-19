// import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
// import { API, graphqlOperation } from 'aws-amplify';
// import { useEffect } from 'react';

export const Splash = () => {

  return (
  <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Scroll</Text>
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
  scrollView: {
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
});
