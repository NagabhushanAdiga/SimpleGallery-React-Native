import React,{Component} from 'react';
import { StyleSheet, Text, ScrollView,Image, View,Dimensions } from 'react-native';

export default class Body extends Component{
  render(){
  return (
    <ScrollView >
        <View style={styles.bigview}>
        <View style={styles.smallview}>
         <Image
         style={styles.myimage}
         source={require("../images/img4.png")}
          />
     </View>
     <View style={styles.smallview}>
         <Image
         style={styles.myimage}
         source={require("../images/img4.png")}
          />
     </View>
     <View style={styles.smallview}>
         <Image
         style={styles.myimage}
         source={require("../images/img4.png")}
          />
     </View>
     <View style={styles.smallview}>
         <Image
         style={styles.myimage}
         source={require("../images/img4.png")}
          />
     </View>
     </View>
    
    </ScrollView>
  );
}
}
const styles = StyleSheet.create({
    bigview: {
    flexDirection:"row",
    flexWrap:"wrap",
  },
  smallview:{
      margin:2,
      height:100,
      width:(Dimensions.get('window').width / 2) - 4,
  },
  myimage:{
        flex:1,
        width:null,
        alignSelf:'stretch',
        height:100,
      
  },
});
