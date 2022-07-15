import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const TaskButtons = ({ setCurrentTask, isFocusActive, startFocusTimer, resetFocusTimer }) => {

    const resetTimer = () => {
        setCurrentTask("");
        resetFocusTimer();
    }

    const buttonToRender = isFocusActive ?
        <View style={styles.buttonWrapper}>
            <Button
                size={20}
                mode="outlined"
                style={styles.button}
                onPress={() => resetTimer()}
            >
                &#10006;
            </Button>
        </View>
        :
        <Button
            size={30}
            mode="outlined"
            style={styles.startButton}
            onPress={() => startFocusTimer()}
        >
            start
        </Button>



    return (
        <View style={styles.container}>
            {buttonToRender}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 25,
    },
    buttonWrapper: {
        flexDirection: 'row',
    },
    button: {
        width: 50,
        borderRadius: 150,
        backgroundColor: '#fff',
        borderColor: '#fff',
        border: 5,
        marginHorizontal: 5,
    },
    startButton: {
        width: 125,
        borderRadius: 150,
        backgroundColor: '#fff',
        borderColor: '#fff',
        border: 5,
        marginHorizontal: 5,
    },
})

export default TaskButtons