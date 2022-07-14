import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import { secondsToTime } from '../helpers/timeHelper';
import { colors } from '../utils/colors';
import FTText from './FTText';

const Timer = ({ focusTime, isFocusActive }) => {

    const timeLeft = secondsToTime(focusTime);

    return (
        <Pressable style={styles.container} onPress={() => { }}>
            <View style={styles.timerBody}>
                <Text style={styles.time}>
                    {timeLeft}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerBody: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 200,
        backgroundColor: colors.timerBackground,
        borderColor: colors.timerBorder,
    },
    time: {
        fontSize: 35,
        color: colors.timerText,
    },
})

export default Timer