import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useReducer} from 'react'

const reducer = (state,action)=>{
    console.log(state.counter);
    console.log(action.payload);
    return {...state,counter:state.counter  + action.payload}
}

const CounterScreen = () => {

    const [state,dispatch] = useReducer(reducer,{counter:0})
    

  return (
    <View>
        <Button title="Increase" onPress={()=>dispatch({payload:1})}/>
        <Button title="Decrease" onPress={()=>dispatch({payload:-1})}/>
      <Text>Counter value: {state.counter}</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})