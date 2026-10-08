import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Input = () => {
    const[text,setText]=useState('')
    const onChnageText=(value:string)=>setText(value)
    return (
    <View style={styles.Container}>
          <Text>Inputs In React Native</Text>
          <TextInput
              placeholder='Enter Your Text'
              value={text}
              onChangeText={onChnageText}
              keyboardType='default'
              style={styles.input}
            />
            <Text>{text}</Text>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
        width: '80%',
    }
})