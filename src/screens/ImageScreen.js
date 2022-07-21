import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
        <ImageDetail title= "Forest" imageSource={require('../../assets/images/forest.jpg')}/>
        <ImageDetail title="Mountain" imageSource={require('../../assets/images/mountain.jpg')}/>
        <ImageDetail title="Beach" imageSource={require('../../assets/images/beach.jpg')}/>
    </View>
  )
};

export default ImageScreen;

const styles = StyleSheet.create({});