import React, { useContext } from 'react';
import {
  Dimensions,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native'

import {
  colors,
  fontStyle
} from '../../utils'
import HorizontalNewsCard from '../../components/Card/HorizontalNewsCard'
import TranslateText from '../../components/TranslateText/TranslateText'
import TopWidget from './TopWidget';
import { Colors } from 'react-native-paper';

const { width, height } = Dimensions.get('window')

const HomeScreen = () => {

  // Generating Dummy Data
  const DATA = Array.from({ length: 5 }, (v, i) => i);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <View style={{ flex: 1, backgroundColor: Colors.black }}>

        {/* Header  */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 8, paddingTop: 50, paddingHorizontal: 16, backgroundColor: Colors.black }}>
          <TouchableOpacity style={{
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            borderRadius: 32,
            backgroundColor: 'white',
          }} onPress={() => { }}>
            <Image source={require('../../assets/img/back.png')}
              style={{ height: 16, width: 16 }}
            />
          </TouchableOpacity>

        </View>

        {/* BG Scroll  */}
        <ScrollView
          style={{ flex: 1, backgroundColor: 'white' }}
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 0,
          }}
          scrollEventThrottle={16}
        >

          <TopWidget></TopWidget>

          {/* Horz 1 */}
          <View style={{ width: '100%', alignSelf: 'flex-start', backgroundColor: 'white' }}>


            <TranslateText style={[{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 15,
              textAlign: 'left',
              marginLeft: 20
            }]}>Petrol</TranslateText>
            <View style={{ height: 5 }}></View>

            <FlatList
              keyExtractor={(itemData) => itemData.toString()}
              data={DATA}
              horizontal
              contentContainerStyle={{ paddingBottom: 8 }}
              renderItem={(itemData) =>
                <HorizontalNewsCard
                  item={itemData}
                  index={itemData}
                  onPress={() => { }}
                />}
            />

          </View>



          {/* Horz 2 */}
          <View style={{ width: '100%', alignSelf: 'flex-start', backgroundColor: 'white' }}>


            <TranslateText style={[{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 15,
              textAlign: 'left',
              marginLeft: 20
            }]}>Rental Rebate</TranslateText>
            <View style={{ height: 5 }}></View>

            <FlatList
              keyExtractor={(itemData) => itemData.toString()}
              data={DATA}
              horizontal
              contentContainerStyle={{ paddingBottom: 8 }}
              renderItem={(itemData) =>
                <HorizontalNewsCard
                  item={itemData}
                  index={itemData}
                  onPress={() => { }}
                />}
            />

          </View>


          {/* Horz 3 */}
          <View style={{ width: '100%', alignSelf: 'flex-start', backgroundColor: 'white' }}>


            <TranslateText style={[{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 15,
              textAlign: 'left',
              marginLeft: 20
            }]}>Food and Beverage</TranslateText>
            <View style={{ height: 5 }}></View>

            <FlatList
              keyExtractor={(itemData) => itemData.toString()}
              data={DATA}
              horizontal
              contentContainerStyle={{ paddingBottom: 8 }}
              renderItem={(itemData) =>
                <HorizontalNewsCard
                  item={itemData}
                  index={itemData}
                  onPress={() => { }}
                />}
            />

          </View>


        </ScrollView>

      </View>
    </View>
  )



};


export default HomeScreen;

