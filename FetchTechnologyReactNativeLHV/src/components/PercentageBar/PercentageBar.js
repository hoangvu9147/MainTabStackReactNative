import React, {useState} from 'react';

import {Text, View} from 'react-native';
import { Colors } from 'react-native-paper';

const PercentageBar = ({
  navigation,
  percentage,
  height,
  backgroundColor,
  completedColor,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);

  return (

    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{

            width: '100%',
            height: getheight,
            marginVertical: 7,
            borderRadius: 3,
            backgroundColor: getBackgroundColor,
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            marginVertical: 7,
            borderRadius: 3,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom: 2
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            bottom:0
          }}>
        </View>
      </View>
    </View>
  );
};

export default PercentageBar;