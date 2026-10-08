import React from "react";
import { StyleSheet, Text, View } from "react-native";



export default function index() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>React Native is Super!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin:20,
    marginTop: 20
    
  },
  Btn: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
  }
});
