import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';



const TimerButtons = ({ isFocusActive, handleFocusTime }) => {
    if (isFocusActive) return null

    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <Button style={styles.bigButton} labelStyle={styles.buttonLabel} icon="minus" mode="contained" onPress={() => handleFocusTime(-300)}>
                    5m
                </Button>
                <Button style={styles.smallButton} labelStyle={styles.buttonLabel} icon="minus" mode="contained" onPress={() => handleFocusTime(-30)}>
                    30s
                </Button>
            </View>
            <View style={styles.buttonWrapper}>
                <Button style={styles.smallButton} labelStyle={styles.buttonLabel} icon="plus" mode="contained" onPress={() => handleFocusTime(30)}>
                    30s
                </Button>
                <Button style={styles.bigButton} labelStyle={styles.buttonLabel} icon="plus" mode="contained" onPress={() => handleFocusTime(300)}>
                    5m
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    buttonLabel: {
        textTransform: 'lowercase',
    },
    bigButton: {
        width: 80,
        borderRadius: 150,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 2,
    },
    smallButton: {
        padding: 0,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 2,
    },
})

export default TimerButtons