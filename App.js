import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, VirtualizedList } from 'react-native';

const map = new Map();

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

const getItemCount = (data) => 50000;

const getItem = (data, index) => {
  if (map.has(index)) {
    return map.get(index);
  }

  let item = {
    key: Math.random().toString(12).substring(0),
    color: generateColor(),
  };
  map.set(index, item);
  return item;
}

const renderPost = ({ item }) => {
  return (
    <View style={styles.post}>
      <Text style={styles.userName}>{item.color}</Text>
      <View style={[styles.square, {backgroundColor: item.color}]} />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Scroll</Text>
      <VirtualizedList
        style={styles.scrollView}
        data={[]}
        initialNumToRender={4}
        renderItem={renderPost}
        getItemCount={getItemCount}
        getItem={getItem} />
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
  post: {
    marginBottom: 6,
  },
  userName: {
    color: "#fff",
    fontWeight: "bold",
    padding: 12,
  },
  square: {
    flex: 1,
    height: 400,
  },
});
