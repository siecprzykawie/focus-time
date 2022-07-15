import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import FTText, { TEXT_TYPE } from '../../components/FTText';
import TaskButtons from '../../components/TaskButtons';
import Timer from '../../components/Timer';
import TimerButtons from '../../components/TimerButtons';
import { TASK_STATUS } from '../../utils/constants';

const DEFAULT_FOCUS_ITEM = 600;

export const ActiveTask = ({ currentTask, setCurrentTask, setTaskHistory, taskHistory }) => {
    // const [focusTime, setFocusTime] = useState(DEFAULT_FOCUS_ITEM);
    const [remainingTime, setRemainingTime] = useState(DEFAULT_FOCUS_ITEM);
    const [isFocusActive, setIsFocusActive] = useState(false);

    const focusTimerIdRef = useRef();
    const startTime = useRef();

    const getRemainingDifference = (currentFinishTime) => currentFinishTime ? Math.round((currentFinishTime - Date.now()) / 1000) : 0;

    // Handle remaining time
    useEffect(() => {
        if (remainingTime <= 1 && isFocusActive) {
            resetFocusTimer()
        }
    }, [remainingTime]);

    const startFocusTimer = () => {
        console.log('Start focus timer');
        startTime.current = Date.now();
        const finishTime = startTime.current + remainingTime * 1000;

        focusTimerIdRef.current = setInterval(() => setRemainingTime(getRemainingDifference(finishTime)), 1000);
        setRemainingTime(getRemainingDifference(finishTime))
        setIsFocusActive(true);
    }

    const resetFocusTimer = () => {
        console.log('Reset focus timer');
        const taskStatus = remainingTime <= 1 ? TASK_STATUS.FINISHED : TASK_STATUS.CANCELED;
        clearInterval(focusTimerIdRef.current);
        setIsFocusActive(false);
        setRemainingTime(DEFAULT_FOCUS_ITEM);
        setTaskHistory([...taskHistory, { task: currentTask, status: taskStatus }]);
        setCurrentTask('');
    }

    const handleFocusTime = (time) => {
        setRemainingTime((prevState) => {
            if (prevState + Number(time) > 0) {
                return prevState + Number(time);
            } else {
                return 0;
            }
        });
    }

    return (
        <View style={styles.container}>
            <FTText type={TEXT_TYPE.HEADER}>{`You are focused on ${currentTask}`}</FTText>
            <Timer
                isFocusActive={isFocusActive}
                remainingTime={remainingTime}
            />
            <TimerButtons
                isFocusActive={isFocusActive}
                handleFocusTime={handleFocusTime}
            />
            <TaskButtons
                startFocusTimer={startFocusTimer}
                setCurrentTask={setCurrentTask}
                isFocusActive={isFocusActive}
                resetFocusTimer={resetFocusTimer}
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