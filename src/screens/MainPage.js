import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MainPage = () => {


  

  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={() => {
        console.log('works');
      }}>
      <Image 
      
      style={styles.image} source = {require('../assets/evilEye.jpg')} />
   </TouchableOpacity> 
   </View>
  );
};

const styles = StyleSheet.create({

    container : {
        backgroundColor: "black",
        height: "100%"
    },
    image : {
      marginTop: "50%",
      height: 400,
      width: 400,
      alignSelf: 'center',
    }
});

export default MainPage;
