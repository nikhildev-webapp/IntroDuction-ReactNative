import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Alert } from 'react-native'
import { Link } from 'expo-router'

const Buttons = () => {
    const alertButton = () => {
        Alert.alert("System Hacked","You have been hacked by Nikhil")
    }

    const onPressFunction = () => {
        Alert.alert("Its a Pressable Button",'Different from Button Component')
    }
  return (
    <View style={styles.container}>
          <Text style={styles.HText}>Buttons</Text>
          <Button
              title="Click Me"
              onPress={alertButton}
          />
          <Pressable onPress={onPressFunction} style={styles.PressBtn}>
                <Text>I'm pressable!</Text>
          </Pressable>
          <Link href="/" style={styles.Btn}>Go Back</Link>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:30
    },
    HText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    PressBtn: {
        backgroundColor: 'lightgray',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    Btn: {
        backgroundColor: "#007AFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    }
})