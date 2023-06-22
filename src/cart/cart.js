import { Text,View,Button,Image, } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState,useContext } from "react";
import Homestyle from "../home/homeStyle";
import axios from 'axios';
import UserContext from '../UserContext'

const Cart = () =>{
    const {cartProduct} = useContext(UserContext)

    

    return(
       <View>
      {cartProduct.map((e,) =>{
        return(
        <View style={Homestyle.box} >
         <Image style={[{ width: 100, height: 100 }]} 
        source={{ uri: `${e.thumb_img.files.file}` }} />
        <Text  style={Homestyle.title} >{e.name}</Text>
        </View>
        );
      })}
       </View>

    )

}
export default Cart