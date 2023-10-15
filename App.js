import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from 'react-native-vector-icons'
import TabHome from "./tab-home";
import TabProduct from "./tab-product";
import TabMenu from "./tab-menu";
import TabUser from "./tab-user";
import TabAbout from "./tab-about";


export default function App() {
   const Tab = createBottomTabNavigator()
  
  return (
      
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
              labelStyle: {fontSize: 14}, // ขนาดตัวอักษรบนปุ่ม
              showLabel: true,        //แสดง
              inactiveTintColor:'blue', //สีข้อความและไอคอน สถานะปกติ
              activeTintColor:'red' //สีข้อความและไอคอน สถานะที่เลือกอยู่

            }}>
            <Tab.Screen name="TabHome" component={TabHome} options={{
              tabBarLabel: 'หน้าแรก', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="md-home" size={20} color={color}/>              
                }
            }}/>
            <Tab.Screen name="TabProduct" component={TabProduct} options={{
              tabBarLabel: 'สินค้า', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="cart" size={20} color={color}/>              
                }
            }}/>
            <Tab.Screen name="TabMenu" component={TabMenu} options={{
              tabBarLabel: 'เมนู', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="menu" size={20} color={color}/>              
                }
            }}/>
            <Tab.Screen name="TabUser" component={TabUser} options={{
              tabBarLabel: 'ฉัน', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="people" size={20} color={color}/>              
                }
            }}/>
              <Tab.Screen name="TabAbout" component={TabAbout} options={{
            tabBarLabel:'เกียวกับ', //ข้อความบนปุ่มนี้
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="information" size={18} color={color}/>          
                }
            }}/>
            </Tab.Navigator>

        </NavigationContainer>
  );
}
