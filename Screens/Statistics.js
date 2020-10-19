import { Ionicons } from '@expo/vector-icons';
import React, {useState, useRef, useEffect} from 'react';
import { Animated,ImageBackground, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView, BackHandler, FlatList} from 'react-native';


export default function Statistics({ navigation }){


    function Quest(props) {

        const content = props.content;
        const [BState, setBState] = useState(1);
        

        if(BState == 1) 
        {
          return(<TouchableOpacity style={styles.quest}>
            <Text>{content}</Text>
            <Button title="Hola" onPress={() =>setBState(2)}></Button>
          </TouchableOpacity>);
        }
        else if(BState == 2)
        { 
          return(<TouchableOpacity style={[styles.quest, { backgroundColor: 'green'}]}>
          <Text>{content}</Text>
          <Button title="Hola" onPress={() =>setBState(1)}></Button>
        </TouchableOpacity>);
        }
        else 
        {
          return(<TouchableOpacity style={styles.quest}></TouchableOpacity>);
        }
      }

      const List = () => {
        return(
          <View>
            <FlatList
               data={[
              {key: 'idź na siłownie'},
              {key: 'Biegnij przez 5 min na bierzni'},
              {key: 'medytuj przez 15 min'},
           
              ]}
              renderItem={({item}) => <Quest content={item.key}/>}

            />
          </View>
        );
      }

  return(
  
    <View>
    
    <View style={styles.top}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="ios-menu" size={45} color='white' style={{flex: 1, alignSelf: 'center'}}/>
      </TouchableOpacity>
      <Text style={{flex: 3, color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>HealthPlayingGame</Text>
    </View>
    
    <View style={{alignItems:'center',backgroundColor: '#909090'}}>  
    <Text style={{color:'white'}}>Today's quests:</Text>
    </View>
    
    <View>
    <List/> 
    </View>
   
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
    quest:{
        alignItems:'center',
        backgroundColor:'grey',
        height: 80,
        flexDirection: 'row',
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
  
   
  });
  