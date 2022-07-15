import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { TASK_STATUS } from '../utils/constants'
import FTText from './FTText'

export const TaskHistory = ({ taskHistory }) => {

    const taskHistoryList = taskHistory.map((task, index) => {
        const itemStyle = task.status === TASK_STATUS.FINISHED ? styles.itemFinished : styles.itemCanceled
        return (
            <View key={index} style={itemStyle}>
                <Text>{task.task}</Text>
            </View>
        )
    })
    return (
        <ScrollView style={styles.list}>
            {taskHistoryList}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {
        height: 100,
        textAlign: 'center',
    },
    itemFinished: {
        borderWidth: 1,
        borderColor: '#106942',
        padding: 2,
        backgroundColor: '#8CE9C0',
        color: '#065F38',
        marginVertical: 1,
    },
    itemCanceled: {
        borderWidth: 1,
        borderColor: '#A40404',
        padding: 2,
        marginVertical: 1,
        backgroundColor: '#C93737',
    },
})

export default TaskHistory