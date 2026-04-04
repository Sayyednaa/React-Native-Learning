import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,

} from 'react-native'

function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() ==='dark';

    return(
        <SafeAreaView>
            <View style={styles.container} >
                <Text  >Hello</Text>
                <Text  >Hello</Text>
                <Text  >Hello</Text>
                <Text  >Hello</Text>
                <Text  >Hello</Text>
                <Text  >Hello</Text>
            </View>

        </SafeAreaView>


    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#1994c9"
        
        

    },
    whiteText:{
        color:"#FFFFFF"
    },
    darkText:{
        color:"#000000"
    }
}
)



export default AppPro