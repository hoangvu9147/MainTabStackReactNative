import * as React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native'
import {
    colors,
    fontStyle
} from '../../utils'
import { Divider, Card } from 'react-native-paper';

const { width, height } = Dimensions.get('window')
import CardEvent from './CardEvent';




const TopWidget = () => {

    return (
        <View style={{ width: '100%', height: 600, backgroundColor: "black" }} >


            <View style={{ flexDirection: 'column', marginLeft: 0, paddingVertical: 0 }} >
                <View style={{ height: 370, backgroundColor: "black" }}>
                    <Text numberOfLines={2}
                        ellipsizeMode='tail'
                        style={[fontStyle.titleHeader, { color: "white", marginBottom: 5, marginLeft: 20, marginTop: 40 }]}>
                        {'Silver Tier'}
                    </Text>
                    <View style={{ height: 10 }}></View>
                    <Text numberOfLines={2} style={[fontStyle.bodyCoin, { color: "white", marginLeft: 20 }]}>{'In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.'}</Text>
                </View>

                <View style={{ width: '100%', height: 230, backgroundColor: "white" }}>

                </View>

                <CardEvent></CardEvent>

            </View>



        </View>

    );
};

const styles = StyleSheet.create({
    box1: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    box2: {
        height: 400,
        width: width - 40,
        backgroundColor: 'white',
        position: 'absolute',
        top: 180,
        left: 20,
        borderRadius: 6,
        borderWidth: 1.5,
        borderColor: '#D2DDEB',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,

    },
});

export default TopWidget;