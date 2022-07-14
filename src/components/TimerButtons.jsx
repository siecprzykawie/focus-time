import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';



const TimerButtons = () => {
    return (
        <View style={styles.container}>
            <Button icon="minus" mode="contained" onPress={() => console.log('-')} />
            <Button icon="plus" mode="contained" onPress={() => console.log('+')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 50,
        flexDirection: 'row',
    }
})

export default TimerButtons