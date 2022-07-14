import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import FTText, { TEXT_TYPE } from '../../components/FTText';
import TaskButtons from '../../components/TaskButtons';
import Timer from '../../components/Timer';
import TimerButtons from '../../components/TimerButtons';

const DEFAULT_FOCUS_ITEM = 5;

export const ActiveTask = ({ currentTask, setCurrentTask }) => {
    const [focusTime, setFocusTime] = useState(DEFAULT_FOCUS_ITEM);
    const [isFocusActive, setIsFocusActive] = useState(false);

    const focusTimerIdRef = useRef();


    // Handle the focus time
    useEffect(() => {
        console.log(focusTimerIdRef.current)
        if (focusTime === 0) {
            resetFocusTimer()
        }
    }, [focusTime]);

    const startFocusTimer = () => {
        console.log('Start focus timer');
        focusTimerIdRef.current = setInterval(() => setFocusTime((prevState) => prevState - 1), 1000);
        setIsFocusActive(true);
    }

    const resetFocusTimer = () => {
        console.log('Reset focus timer');
        clearInterval(focusTimerIdRef.current);
        setIsFocusActive(false);
        setFocusTime(DEFAULT_FOCUS_ITEM);
    }

    return (
        <View style={styles.container}>
            <FTText
                text={`You are focused on ${currentTask}`}
                type={TEXT_TYPE.HEADER}
            />
            <Timer
                isFocusActive={isFocusActive}
                focusTime={focusTime}
            />
            <TimerButtons
                isFocusActive={isFocusActive}
            />
            <TaskButtons
                startFocusTimer={startFocusTimer}
                setCurrentTask={setCurrentTask}
                isFocusActive={isFocusActive}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
    }
})