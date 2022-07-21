import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//align-items: crossAxisAlignment
//justify-content: mainAxisALignment

const BoxScreen = () => {
  return (
    <View >
      <View style={styles.horizontalView}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
      </View>
      <View style={styles.horizontalView}>
          <View style={styles.box}></View>
      </View>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
  horizontalView:{
    justifyContent:'space-between',
    flexDirection:'row'
  },
  box:{
    height:100,
    width:100,
    color:'red'
  }
})