import React,{Component} from 'react';
import { StyleSheet,ImageBackground, View,Image,Text } from 'react-native';

export default class Header extends Component{
  render(){
  return (
    <ImageBackground style={styles.headerbg}
    source={require('../images/background.jpg')}
    >
    <View style={styles.headercontainer}>
    <View style={styles.profilecontainer}>
        <Image style={styles.mypic}
        source={require('../images/profilepic.jpg')}
        >

        </Image>
    </View>
    <Text style={styles.name}>Nagabhushan Adiga</Text>
    <Text style={styles.liner}>Software Developer</Text>
    </View>
    </ImageBackground>
  );
}
}
const styles = StyleSheet.create({
    headerbg: {
    flex: 1,
    width:null,
    alignSelf:"stretch",
    
  },
  headercontainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      padding:10,
      backgroundColor:"rgba(0,0,0,0.6)",
  },
  profilecontainer:{
        width:180,
        height:180,
  
  },
  mypic:{
      flex:1,
      width:null,
      alignSelf:"stretch",
      borderRadius:90,
      borderWidth:3,
      borderColor:"#fff",

  },
  name:{
    marginTop:10,
    fontSize:18,
    fontWeight:"bold",
    color:"#fff",
  },
  liner:{
    color:"#fff",
    fontSize:15,
    fontStyle:"italic",
  }
});
