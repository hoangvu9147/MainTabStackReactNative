import * as React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {
    colors,
    fontStyle
} from '../../utils'

import { Divider, Card } from 'react-native-paper';
const { width, height } = Dimensions.get('window')


const HorizontalNewsCard = ({ item, index, onPress }) => {
    // console.log("index", index.index);

    return (

        <Card
            activeOpacity={0.7}
            style={{
                marginVertical: 8,
                borderRadius: 6,
                borderWidth: 1.5,
                marginLeft: 16,//marginLeft, 
                marginRight: 3,
                borderColor: '#D2DDEB',
                height: 240,
                width: width * 0.55,
                marginHorizontal: 8,
                borderRadius: 7,
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
            }}
            onPress={() => { onPress() }}>


            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 0 }}>

                <View style={{ alignItems: 'center' }}>
                    <Image resizeMode='stretch'
                        source={require(
                            "../../assets/img/bg_1.png"
                            )}
                        style={{ height: 98, width: '100%', borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 10, paddingVertical: 16 }} >
                    <Text numberOfLines={2}
                        ellipsizeMode='tail'
                        style={[fontStyle.titleCoin, { color: "#0062FF", marginBottom: 5 }]}
                    >
                        {'15 Coins'}
                    </Text>
                    <Text sellipsizeMode='tail' numberOfLines={2} style={[fontStyle.bodyCoin, { color: colors.grey7 }]}>{'50% discount for every $100 top-up on your Shell Petrol Card'}</Text>
                </View>
            </View>

        </Card>

    );
}


export default HorizontalNewsCard;