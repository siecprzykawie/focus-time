import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import FTText, { TEXT_TYPE } from '../../components/FTText';


export const AddNewTask = ({ setCurrentTask }) => {
    const [task, setTask] = useState("");

    const handleFocusItemChange = (task) => {
        setCurrentTask(task);
    }

    return (
        <View style={styles.container}>
            <FTText
                text="What are you focused on?"
                type={TEXT_TYPE.HEADER}
            />
            <TextInput
                label="What would you like to focus on?"
                value={task}
                onChangeText={text => setTask(text)}
            />
            <Button icon="check" mode="contained" onPress={() => handleFocusItemChange(task)}>
                Set focus item
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})