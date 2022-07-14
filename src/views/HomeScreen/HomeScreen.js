import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { AddNewTask } from '../AddNewTask/AddNewTask';
import { ActiveTask } from '../ActiveTask/ActiveTask';

const HomeScreen = () => {
    const [currentTask, setCurrentTask] = useState("")

    const renderActiveView = currentTask ?
        <AddNewTask
            setCurrentTask={setCurrentTask}
        /> :
        <ActiveTask
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
        />;

    return (
        <View style={styles.container}>
            {renderActiveView}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
    }
})

export default HomeScreen