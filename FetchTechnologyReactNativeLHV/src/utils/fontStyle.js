import {
    Platform,
    StyleSheet, Dimensions
} from 'react-native';

const fontStyle = StyleSheet.create({
    R15: {
        fontFamily: Platform.OS === 'ios' ? null : 'SF-Pro-Text-Medium',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: -0.24
    },
    subtitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        lineHeight: 23,
    },
    body: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 24,
    },
    caption: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        lineHeight: 16,
    },

    bodyBold: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 'bold'
    },

    titleHeader: {
        fontSize: 32,
        fontWeight: 'bold'
    },

    titleCoin: {
        fontSize: 16,
        fontWeight: 'bold'
    },


    bodyCoin: {
        fontSize: 13,
        lineHeight: 19,
    },

    none18: {
        fontSize: 16,
        lineHeight: 19,
    },

    none14: {
        fontSize: 14,
        lineHeight: 19,
    },

    none12: {
        fontSize: 14,
        lineHeight: 19,
        textDecorationLine: 'underline',
    },

    none48: {
        fontSize: 48,
    },
   
  });



export default fontStyle;