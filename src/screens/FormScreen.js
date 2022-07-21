import { NativeEventEmitter, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'

const FormScreen = () => {

    const [hideError,setHideError] = useState(false);

  return (
    <View>
     <TextInput 
        style={styles.input} 
        placeholder="Enter name"
        autoCapitalize='none'
        autoCorrect={false}
        
        onChangeText={(newVal)=>{
            if(newVal.length >=  5){
                setHideError(true)
            }else {
                setHideError(false)
            }
        }}
         />
        {
            hideError ? null  : <Text>Password must be more  than 5 charachters</Text>
        }
    </View>
  )
}

export default FormScreen

const styles = StyleSheet.create({input:{
    borderColor:'black',
    margin:20,
    borderWidth:1,
    fontSize:18,
    padding:16
}})