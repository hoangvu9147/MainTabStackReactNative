import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('window')
import { Divider, Card, Colors, Image } from 'react-native-paper';
import {
    colors,
    fontStyle
} from '../../utils'

import PercentageBar from '../../components/PercentageBar/PercentageBar';


const CardEvent = () => {
    return (

        <Card style={styles.box}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 0 }}>

                <View style={{ flexDirection: 'column', marginLeft: 10, paddingVertical: 16 }} >

                    <Text sellipsizeMode='tail' numberOfLines={2} style={[fontStyle.none14, { color: "#B5B5BE", marginLeft: 15 }]}>{'Available Coin balance'}</Text>
                    <Text numberOfLines={2} style={[fontStyle.none48, { color: "#171725", marginLeft: 15 }]}>
                        {'340'}
                    </Text>
                    <View style={{ width: '90%', height: 4, justifyContent: 'center', marginLeft: 10, marginTop: 15 }}>
                        <PercentageBar
                            height={4}
                            backgroundColor={'grey[200]'}
                            completedColor={'blue'}
                            percentage={'80%'}
                        />
                    </View>
                    <Text sellipsizeMode='tail' numberOfLines={2} style={[fontStyle.none18, { color: "#92929D", marginLeft: 15, marginTop: 30 }]}>{'You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.'}</Text>
                    <View style={{ marginLeft: 10, marginTop: 15 }} >
                        <TranslateText style={[fontStyle.none12, styles.textRow]}>Account information</TranslateText>
                        {/* <Image source={require('../../assets/img/back.png')}
                        style={{ height: 30, width: 30}}
                      /> */}
                    </View>

                    <View style={styles.logButton}>
                        {/* <TouchableOpacity
                            // activeOpacity={0.5}
                            onPress={() => (console.log('text'))}
                        > */}
                        <Text style={styles.logText}>My Coupons</Text>
                        {/* </TouchableOpacity> */}
                    </View>

                    <Text style={[fontStyle.none14, { color: "#B5B5BE", textAlign: 'center', marginTop: 20 }]}>{'Updated : 02/11/2021'}</Text>

                </View>
            </View>
        </Card>

    );
}

const styles = StyleSheet.create({
    box: {
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
    arrowRight: {
        position: 'absolute',
        right: 0,
        color: Colors.blue700,
    },
    textRow: {
        color: Colors.blue700,
        marginLeft: 5,
    },
    logButton: {
        marginTop: 20,
        backgroundColor: '#171725',
        height: 50,
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
        // width: 300,
        borderRadius: 10
    },
    logText: {
        // marginTop: 8,
        textAlign: 'center',
        color: '#fff',
        // fontWeight: 'bold',
        fontSize: 20,
    },

});


export default CardEvent;