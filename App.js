import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import React, {useState, useRef, useEffect}from 'react';
import { Animated,ImageBackground, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';



export default function App() {

  function RButton1 () {
    return(
      <TouchableOpacity onPress={openMe}>
        <View style={styles.circle}>
          <Ionicons name="md-body" size={30} color="#ef476f" />
        </View>
      </TouchableOpacity>
    );}

    function RButton2 () {
      return(
        <TouchableOpacity>
          <View style={styles.circle}>
            <Ionicons name="md-happy" size={30} color="#ebad21" />
          </View>
        </TouchableOpacity>
      );}

      function RButton3 () {
        return(
          <TouchableOpacity>
            <View style={styles.circle}>
              <Ionicons name="md-pizza" size={30} color="#06d6a0" />
            </View>
          </TouchableOpacity>
        );}

        function RButton4 () {
          return(
            <TouchableOpacity>
              <View style={styles.circle}>
                <Ionicons name="md-pulse" size={30} color="#118ab2" />
              </View>
            </TouchableOpacity>
          );}

          function RButton5 () {
            return(
              <TouchableOpacity onPress={closeMe}>
                <View style={styles.circle}>
                  <Ionicons name="md-close" size={24} color="red" />
                </View>
              </TouchableOpacity>
            );}


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
        <TouchableOpacity>
            <Ionicons name="ios-menu" size={45} color='white' style={{flex: 1, alignSelf: 'center',}}/>
        </TouchableOpacity>
        <Text style={{flex: 5, color: 'white', alignSelf: 'right', fontSize: 20, fontWeight: 'bold', textAlign: 'right'}}>HealthPlayingGame</Text>
      </View>

      <View style={styles.center}>
          <Text>Avatar</Text>
      </View>

        <Animated.View style={[styles.bottom, {height: aHight}]}>
          <RButton1/>
          <RButton2/>
          <RButton3/>
          <RButton4/>
          <RButton5/>
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
  
  center:{
    color:'black',
    alignItems:'center',
  },

});
