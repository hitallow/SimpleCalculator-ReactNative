import React from 'react'

import { TouchableHighlight, StyleSheet, Dimensions, Text } from 'react-native'



const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    dupleColumn: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    tripleColumn: {
        width: (Dimensions.get('window').width / 4) * 3,
    }



});

export default (props) => {
    const styles = [style.button]
    if (props.double) styles.push(style.dupleColumn)

    if (props.triple) styles.push(style.tripleColumn)
    if (props.operation) styles.push(style.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styles}>{props.label}</Text>
        </TouchableHighlight>
    )
}


