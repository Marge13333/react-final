import { Text,View,Button,Image, } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState,useContext } from "react";
import Homestyle from "./homeStyle";
import axios from 'axios';
import UserContext from '../UserContext'

const Home = () =>{

  const [product,setProduct] = useState([])
  const {setCartProduct} = useContext(UserContext)

useEffect(() => {
  axios.get('https://api.vendoo.ge/api/beta/catalog?keyword=iphone&sort=relevance&sortDir=desc&page=1&limit=20  ', {
    
  })
  .then(function (response) {

const prod = response.data.products
    setProduct(prod)
 
  })
      },[]);




    const navigation = useNavigation()
    
    const LogOut = () => {
        AsyncStorage.removeItem('user').then(() => {
            navigation.replace('LogIn')
        })
    }
    return(
        <View>
            <View>
               <TouchableOpacity onPress={() => LogOut()}>
                  <Text>Logout</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={() =>  navigation.navigate('Cart')}>
                  <Text>Cart</Text>
               </TouchableOpacity>

            </View>

            <View style={Homestyle.boxWrapper}>
            {product.map((item,index) =>{
        return(
        <View style={Homestyle.box} key={index}>
         <Image style={[{ width: 100, height: 100 }]} 
        source={{ uri: `${item.thumb_img.files.file}` }} />
        <Text  style={Homestyle.title} >{item.name}</Text>

        <TouchableOpacity onPress={() => setCartProduct(item)}>
                  <Text style={{color:"red", borderColor:'red'}}>Add in Cart</Text>
               </TouchableOpacity>

        </View>
        

        );
      })}
            </View>
           
        </View>
    );
}
export default Home