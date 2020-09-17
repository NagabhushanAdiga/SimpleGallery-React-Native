import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Mid extends Component{
  render(){
  return (
    <View style={styles.mid}>
    <View style={styles.outerview}>
        <Text style={styles.textone}>75+</Text>
        <Text style={styles.texttwo}>Projects</Text>
    </View>
    <View style={styles.outerview}>
        <Text style={styles.textone}>75m+</Text>
        <Text style={styles.texttwo}>Followers</Text>
    </View>
 


    </View>
  );
}
}
const styles = StyleSheet.create({
    mid: {
 flexDirection:"row",
 borderTopColor:"#fff",
 borderTopWidth:8,
  },
  outerview:{
      flex:1,
      alignItems:"center",
  },
  textone:{
      fontSize:16,
      fontWeight:"bold",
      paddingLeft:15,
  },
  texttwo:{
      fontSize:14,
      paddingLeft:15,
  },
  leftbar:{
    borderRightWidth:4,
    borderRightColor:"#fff",
  },
});
