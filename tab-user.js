import React from "react-native"
import {StyleSheet,View,Text,} from "react-native"
import globalstyles from "./global-styles";




 export default function TabUser ({navigation}){
   
   return(
     <View style={globalstyles.container}>
    <Text style={{fontSize:30}}>  
     </Text>
    <scrollView contentContainerStyle={style.scrollViewContent}
     style={{alignItems: 'center'}} horizontal={false}>
    <Text style={style.text}>
ชื่อ ธนิสร มโนรมย์ 
ชื่อเล่น น้ำหนึ่ง
อายุ 21 ปี
อาหารที่ชอบ อาหารอีสาน อาหารจีน อาหารญี่ปุ่น ไม่กินผัก
หนังภาพพยนต์ กลัวผี
สถานะการณ์ ปิคนิด ตั้งแคมป์
กีฬาที่ชอบ ขี่ม้า ว่ายน้ำ ดำน้ำ เทควันโด วิ่งจ๊อกกิ่ง ฟุตบอล บาศเกตบอล 
อยากใช้ชีวิตเป็นอิสระ ใช้ชีวิตตัวเองมีคุ้มค่าและใช้ชีวิตที่เหลือคุ้มค่ามากที่สุดและชอบทำงานเก็บเงิน 
    </Text>
    </scrollView>
    </View>
   )
 }
  const style = StyleSheet.create({
   container :{
     flex:1,
     marginTop:50
   },
    scrollViewContent:{
      maegin:5,
      padding:20,
      backgroundColor: '#FAF0E6'
    },
    text:{
      fontSize:12

    }
 })