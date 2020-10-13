import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import React, {useState, useRef, useEffect}from 'react';
import { Animated,ImageBackground, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import  RButton1  from './components/button.js';
import RButton2 from './components/button2.js';
import RButton3 from './components/button3.js';
import RButton4 from './components/button4.js';


export default function App() {
  const aHight = useRef( new Animated.Value(100)).current;

  const openMe = () => {
        Animated.timing( aHight, {
            toValue: 300,
            duration: 1000,
          }
        ).start();
  };
  const closeMe = () => {
        Animated.timing( aHight, {
            toValue: 100,
            duration: 1000,
          }
        ).start();
  };


  return (

    <View style={styles.container}>

      <ImageBackground source={require('./assets/background.png')} style={styles.image}/>

      <View style={styles.top}>
        <Ionicons name="ios-menu" size={45} color='white' style={{flex: 1, alignSelf: 'center'}}/>
        <Text style={{flex: 3, color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>HealthPlayingGame</Text>
      </View>


      <Text>HOla!</Text>
      <Button title='adios' onPress={openMe}></Button>
      <Button title='fuck go back' onPress={closeMe}></Button>

        <Animated.View style={[styles.bottom, {height: aHight}]}>
          <RButton1/>
          <RButton2/>
          <RButton3/>
          <RButton4/>
        </Animated.View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    position: 'absolute',
    top:0,
    bottom:100,
    left:0,
    right:0,

  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#909090'
  },

  top:{
    flexDirection: 'row',
    height:70,
    backgroundColor: '#4b4b4d',
    alignItems: 'flex-start',
    padding: 25
  },

  bottom:{
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height:100,
    backgroundColor: '#4b4b4d',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 15,


  },
  circle:{
    height:60,
    width:60,
    borderRadius: 50,
    backgroundColor:'#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center'
  },

});
