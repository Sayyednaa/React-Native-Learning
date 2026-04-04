import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
View,
Text,
Button,
} from "react-native";




function App(){
  return(
  <SafeAreaProvider>
    <View>
      <Text>Abdul Ali</Text>
      <Text>Abdul Ali</Text>
      <Text>Abdul Ali</Text>
      <Text>Abdul Ali</Text>
      <Button title="Click Me" />
    </View>
    
  </SafeAreaProvider>
  )
}

export default App