import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
 
  useEffect(() => {
    

    setTimeout(() => {
      setAnimating(false);
      navigation.replace('DrawerNavigation');

    }, 500);
  }, []);
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/logo.png')}
        style={{width: '95%', resizeMode: 'contain', margin: 20}}
      />
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});