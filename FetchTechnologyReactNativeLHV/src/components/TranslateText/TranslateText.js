import React, {Component } from 'react';
import {Text} from 'react-native'

export default TranslateText = ({children,...props}) => {
    return <Text {...props}>{children}</Text>
}