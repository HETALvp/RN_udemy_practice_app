import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDetail = (props) => {
  return (
    <View>
      <Image source = {props.imageSource}/>
      <Text>Image of {props.title}</Text>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({})