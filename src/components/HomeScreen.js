// import React from 'react';
import { StyleSheet, VirtualizedList } from 'react-native';
import { Post } from './Post';

const map = new Map();

export const HomeScreen = () => {

  const getItemCount = (data) => 50000;

  const renderPost = ({ item }) => {
    return <Post 
      color={item.color}
      userName={item.userName}
      liked={item.liked} />
  }

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };
  
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
  
  return (
    <VirtualizedList
      style={styles.scrollView}
      data={[]}
      initialNumToRender={4}
      renderItem={renderPost}
      getItemCount={getItemCount}
      getItem={getItem} />
  );

}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
});
