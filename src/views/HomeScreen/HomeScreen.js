import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { AddNewTask } from '../AddNewTask/AddNewTask';
import { ActiveTask } from '../ActiveTask/ActiveTask';
import TaskHistory from '../../components/TaskHistory';

const HomeScreen = () => {
    const [currentTask, setCurrentTask] = useState("")
    const [taskHistory, setTaskHistory] = useState([])

    const renderActiveView = currentTask ?
        <ActiveTask
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
            setTaskHistory={setTaskHistory}
            taskHistory={taskHistory}
        /> :
        <AddNewTask
            setCurrentTask={setCurrentTask}
        />

    return (
        <View style={styles.container}>
            {renderActiveView}
            <TaskHistory taskHistory={taskHistory} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }
})

export default HomeScreen