import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    displaValue: {
        fontSize: 60,
        color: '#fff'

    }
});

export default (props) => {
    return (
        <View style={style.display}>
            <Text style={style.displaValue} numberOfLines={15}>{props.value}</Text>
        </View>
    )
}