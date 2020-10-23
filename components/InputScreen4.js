import React, {useState} from 'react';

import {StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList} from 'react-native';



function InputScreen1(props) {
   
    const [Notes, setNotes] = useState('');

    return (
        <View style={styles.Smolcontainer}>
        <Text style={styles.titleInput}>Notebook</Text>
        <TextInput style={styles.inputtext} placeholder='Type something' value={Notes} onChangeText={Notes => setNotes(Notes)}></TextInput>
        <View style={styles.SmolcontainerContent}>
     <FlatList
      data={[
          {key: Notes },
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
        </View>
         </View> 
    );

}

export default InputScreen1;


const styles = StyleSheet.create({
titleInput:{
    fontSize: 20,
    margin: 10
  },
  inputtext:{
    borderWidth: 1,
    borderColor: '#000000',
    padding: 8,
    margin: 10,
    width: 200,
  },
  Smolcontainer:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 30,
  },
  inputtextButton:{
    margin: 10,
    backgroundColor: '#28A2C3',
    width: 200,
    height:40,
    borderRadius: 10,
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  SmolcontainerContent:{
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
  }
});