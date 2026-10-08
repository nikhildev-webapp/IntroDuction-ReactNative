import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Lists = () => {
    return (
    <View style={styles.container}>
            <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'D'},
                    {key: 'Dev'},
                    {key: 'Din'},
                    {key: 'Den'},
                    {key: 'vin'},
                    {key: 'in'},
                    {key: 'evin'},
                    {key: 'vxin'},
                    {key: 'Dexvin'},
                ]}
                renderItem={({item})=><Text>{item.key}</Text>}
            />
    </View>
  )
}

export default Lists

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        margin: 40
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        margin: 10,
    }
})