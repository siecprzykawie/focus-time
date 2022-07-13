import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import FTText, { TEXT_TYPE } from '../../components/FTText';
import { secondsToTime } from '../../helpers/timeHelper';

const DEFAULT_FOCUS_ITEM = 600;

export const ActiveTask = ({ currentTask, setCurrentTask }) => {
    const [focusTime, setFocusTime] = useState(DEFAULT_FOCUS_ITEM);
    const clearItem = () => setCurrentFocusItem("");

    const timeLeft = secondsToTime(focusTime);

    return (
        <View>
            <FTText
                text={`You are focused on ${currentTask}`}
                type={TEXT_TYPE.HEADER}
            />
            <FTText
                text={timeLeft}
                type={TEXT_TYPE.SUB_HEADER}
            />
            <Button icon="check" mode="contained" onPress={() => clearItem()}>
                Clear focus item
            </Button>
        </View>
    )
}