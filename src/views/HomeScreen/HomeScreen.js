import React, { useState } from 'react';
import { View } from 'react-native';

import { AddNewTask } from '../AddNewTask/AddNewTask';
import { ActiveTask } from '../ActiveTask/ActiveTask';

const HomeScreen = () => {
    const [currentTask, setCurrentTask] = useState("")

    const renderActiveView = !currentTask ?
        <AddNewTask
            setCurrentTask={setCurrentTask}
        /> :
        <ActiveTask
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
        />;
    return (
        <View>{renderActiveView}</View>
    )
}

export default HomeScreen