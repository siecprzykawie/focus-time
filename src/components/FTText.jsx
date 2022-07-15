import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../utils/colors'

const FTText = ({ type, children }) => {
    const textStyle = type === TEXT_TYPE.HEADER ? styles.header : styles.subHeader

    return (
        <Text style={textStyle}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        color: colors.white,
        fontSize: 20,
    },
    subHeader: {
        color: colors.white,
        fontSize: 16,
    }
})

export const TEXT_TYPE = {
    HEADER: 'header',
    SUB_HEADER: 'subHeader',
}

export default FTText