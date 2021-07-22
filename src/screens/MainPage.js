import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MainPage = () => {


  

  return (
    <View style={styles.container}>
      
      <Image style={styles.image} source = {require('../assets/evilEye.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({

    container : {
        backgroundColor: "black",
        height: "100%"
    },
    image : {
      height: 150 ,
      width: 150,
      alignSelf: 'center',
    }
});

export default MainPage;
