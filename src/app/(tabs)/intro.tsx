import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const intro = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>React Native is Super!</Text>
      <Link href="/" style={styles.Btn}>Go Back</Link>  
    </View>
  )
}

export default intro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
  }
})