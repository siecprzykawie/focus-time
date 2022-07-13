import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import FTText, { TEXT_TYPE } from '../../components/FTText';

export const ActiveTask = ({ currentFocusItem, setCurrentFocusItem }) => {
    const clearFocusItem = () => setCurrentFocusItem("");
    return (
        <View>
            <FTText
                text={`You are focused on ${currentFocusItem}`}
                type={TEXT_TYPE.HEADER}
            />
            <Button icon="check" mode="contained" onPress={() => clearFocusItem()}>
                Clear focus item
            </Button>
        </View>
    )
}