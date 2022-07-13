import React, { useState } from 'react';
import { View } from 'react-native';

import { AddNewTask } from '../AddNewTask/AddNewTask';
import { ActiveTask } from '../ActiveTask/ActiveTask';

const HomeScreen = () => {
    const [currentFocusItem, setCurrentFocusItem] = useState("")

    const currentView = !currentFocusItem ?
        <AddNewTask
            setCurrentFocusItem={setCurrentFocusItem}
        /> :
        <ActiveTask
            currentFocusItem={currentFocusItem}
            setCurrentFocusItem={setCurrentFocusItem}
        />;
    return (
        <View>{currentView}</View>
    )
}

export default HomeScreen