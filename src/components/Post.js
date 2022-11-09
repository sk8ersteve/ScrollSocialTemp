import { StyleSheet, Text, View } from 'react-native';

export const Post = (props) => {
  return (
    <View style={styles.post}>
      <Text style={styles.userName}>{props.color}</Text>
      <View style={[styles.square, {backgroundColor: props.color}]} />
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: "100%",
    aspectRatio: 1,
  },
});
