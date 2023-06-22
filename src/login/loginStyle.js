import { StyleSheet} from 'react-native';

const LogInstyles = StyleSheet.create({
 input: {
    marginLeft:20,
    marginTop:20,
    marginRight:20,
    borderWidth:1,
    height:40,
    paddingLeft: 10,

  },
  LooginBtn:{
    marginTop:10,
    backgroundColor:"blue",
    padding:10,
    maxWidth: 300,
    marginLeft:50,
    display:"flex",
    justifyContent:"center"
  },
  loginError:{
    marginTop:10,
    color:"red",
    fontSize:16,
    marginLeft:20
  }
});
export default LogInstyles