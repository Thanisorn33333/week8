import React from "react-native"
import {StyleSheet,View,Text,ScrollView,Image} from "react-native"
import globalstyles from "./global-styles";




 export default function TabHome ({navigation}){
   
   return(
    <View style={globalstyles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}
     style={{alignItems: 'center'}} horizontal={false}>
        <Text style={{fontSize:22}}> iPhone </Text>

        <Image  source={require('./A1.jpg')} style={styles.img}/>
        <Image source={require('./A2.jpg')}style={styles.img}/>
        <Image source={require('./A3.jpg')}style={styles.img}/>
        <Image source={require('./A4.jpg')}style={styles.img}/>
        <Image source={require('./A5.jpg')}style={styles.img}/>
        <Image source={require('./A6.jpg')}style={styles.img}/>
    </ScrollView>
    </View>
   )
 }
 const styles = StyleSheet.create({
   container :{
     flex:1,
     marginTop:50
   },
    scrollViewContent:{
      maegin:5,
      padding:20,
      backgroundColor: '#FFFFF0'
    },
    text:{
      fontSize:12
    },
    img:{
        height:250 ,
        width:300
}

 })