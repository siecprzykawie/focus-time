import React from 'react'
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const TaskButtons = ({ setCurrentTask, isFocusActive, startFocusTimer }) => {

    const clearItem = () => setCurrentTask("");

    const buttonToRender = isFocusActive ?
        <IconButton
            icon="close"
            color='#fff'
            size={20}
            onPress={() => clearItem}
        /> :
        <IconButton
            icon="check"
            color='#fff'
            size={20}
            onPress={() => startFocusTimer()}
        />
    return (
        <View>
            {buttonToRender}
        </View>
    )
}

export default TaskButtons