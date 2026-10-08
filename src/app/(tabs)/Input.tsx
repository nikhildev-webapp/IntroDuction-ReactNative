import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = () => {
  const [text, setText] = useState('');
  const onChangeText = (value: string) => setText(value);

  return (
    <View style={styles.Container}>
      <Text>Inputs In React Native</Text>
      <TextInput
        placeholder="Enter Your Text"
        value={text}
        onChangeText={onChangeText}
        keyboardType="default"
        style={styles.input}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default Input;

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
  },
});