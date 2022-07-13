import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import FTText, { TEXT_TYPE } from '../../components/FTText';


export const AddNewTask = ({ setCurrentFocusItem }) => {
    const [focusItem, setFocusItem] = useState("");

    const handleFocusItemChange = (focusItem) => {
        setCurrentFocusItem(focusItem);
    }

    return (
        <View style={styles.container}>
            <FTText
                text="What are you focused on?"
                type={TEXT_TYPE.HEADER}
            />
            <TextInput
                label="What would you like to focus on?"
                value={focusItem}
                onChangeText={text => setFocusItem(text)}
            />
            <Button icon="check" mode="contained" onPress={() => handleFocusItemChange(focusItem)}>
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