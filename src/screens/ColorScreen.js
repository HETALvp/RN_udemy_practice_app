import { View, FlatList , StyleSheet, Button } from 'react-native'
import React,{useState} from 'react'

const ColorScreen = () => {

    const [colors,setColors] = useState([]);

    function onAddColor(){
        setColors([...colors,randomRgb()])
    }

  return (
    <View>
      <Button title="Add a Color" onPress={onAddColor}/>
     
      <FlatList
      keyExtractor={(item)=>item}
        data={colors}
        renderItem={({item})=> 
        ///item == rgb(r,g,b)
        {
            return <View style={{margin:15,height:100,width:100,backgroundColor:item}}/>
        }
    }
      />
    </View>
  )
}
const randomRgb =() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
     container:{
        margin:15,
        height: 100,
        width:100,
        backgroundColor:randomRgb()
     }
});

export default ColorScreen