import { Text,View,Button } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import {TextInput} from 'react-native'
import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native"
import LogInstyles from './loginStyle';
import axios from 'axios';



const LogIn = () =>{
   
    const navigation = useNavigation()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState("")
    const [errorStyle,setErrorStyle] = useState('none')

    const handleLogin = async  (e) =>{

        try{
            e.preventDefault() // prevent make request
            setError('')

            if(!email || !password){
                setError('please fill your information')
                setErrorStyle('flex')
                return
              }
            const response = await axios.post(
                'https://accounts.tnet.ge/api/ka/user/auth',
                {
                  Email: email,
                  Password : password
                }
              )
    
            const userInfo = response?.data?.data?.Data
    
            AsyncStorage.setItem('user', JSON.stringify(userInfo))

              
          }catch{
            setError("პაროლი ან ემაილი არასწორია")
            setErrorStyle('flex')
          }finally{
            navigation.replace('Home')

          }

          

    }
    useEffect(() => {
        AsyncStorage.getItem('user').then(value => {
            if(value !== null) {
                navigation.replace('Home',{
                    user : JSON.parse(value)
                })
            }
        })
    },[])
    return(
        <View style={{marginTop:20}}>
            <TextInput  
           style={LogInstyles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
            />
            <TextInput
               style={LogInstyles.input}
                password={true} 
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry
            />
            <Text style={LogInstyles.loginError} >{error}</Text>
        <View>
            <TouchableOpacity onPress={handleLogin} 
            style={LogInstyles.LooginBtn}
            >
                <Text style={{color:"white",fontSize:16,marginLeft:115}}>Log in</Text>
            </TouchableOpacity>
        </View>
           

        </View>
    );
}
export default LogIn