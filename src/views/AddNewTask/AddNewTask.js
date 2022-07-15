import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export const AddNewTask = ({ setCurrentTask }) => {
    const [task, setTask] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                label="What would you like to focus on?"
                value={task}
                onChangeText={(text) => setTask(text)}
            />
            <Button icon="check" mode="contained" onPress={() => setCurrentTask(task)}>
                Set focus item
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    }
})