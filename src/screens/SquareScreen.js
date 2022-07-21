import { StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const reducer = (state,action) =>{
    //state === {red:number,green:numer,blue:number}
    //action==={type  : red || green|| blue, payload 15||-15}

    switch(action.type){
        case 'change_red':return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state,red:state.red+  action.payload};
        case 'change_green':return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state,green:state.green+  action.payload};
        case 'change_blue':return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state,blue:state.blue+  action.payload};
        default:return state;
    }
}
const SquareScreen = () => {


  const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
  const {red,green,blue}= state;
  

    return (
        <View>

            <View style={{ margin: 15,flex:'center' , height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
            <ColorCounter
                color="Red"
                onIncrease={() =>dispatch({type:'change_red', payload:COLOR_INCREMENT})}
                onDecrease={() =>dispatch({type:'change_red',payload:-1 * COLOR_INCREMENT})}
            />
            <ColorCounter b 
                color="Blue"
                onIncrease={() =>dispatch({type:'change_blue', payload:COLOR_INCREMENT})}
                onDecrease={() =>dispatch({type:'change_blue',payload:-1 * COLOR_INCREMENT})}
            />
            <ColorCounter color="Green"
                onIncrease={() =>dispatch({type:'change_green', payload:COLOR_INCREMENT})}
                onDecrease={() =>dispatch({type:'change_green',payload:-1 * COLOR_INCREMENT})}
            />
        </View> 
    )
}

export default SquareScreen

const styles = StyleSheet.create({})