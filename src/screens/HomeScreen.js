import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const HomeScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        style={styles.buttonStyle}
        title="Go to Components"
        onPress={() => navigation.navigate('Component')}  //navigate-> find if route exists or adds route to stack
      />
      <Button
        style={styles.buttonStyle}
        title="Go to List"
        onPress={() => navigation.push('List')}  //push-> adds route to stack
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Image Card"
        onPress={() => navigation.push('ImageCard')}  //push-> adds route to stack
      />

<Button
        style={styles.buttonStyle}
        title="Go to Color"
        onPress={() => navigation.push('ColorScreen')}  //push-> adds route to stack
      />

<Button
        style={styles.buttonStyle}
        title="Go to Square screen"
        onPress={() => navigation.push('SquareScreen')}  //push-> adds route to stack
      />

<Button
        style={styles.buttonStyle}
        title="Go to Counter screen"
        onPress={() => navigation.push('CounterScreen')}  //push-> adds route to stack
      />

<Button
        style={styles.buttonStyle}
        title="Go to Form screen"
        onPress={() => navigation.push('FormScreen')}  //push-> adds route to stack
      />

<Button
        style={styles.buttonStyle}
        title="Go to Box screen"
        onPress={() => navigation.push('BoxScreen')}  //push-> adds route to stack
      />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  buttonStyle: {
    margin: 50
  }
});