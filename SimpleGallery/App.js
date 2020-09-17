import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./app/components/Header";
import Mid from "./app/components/Mid";
import Body from "./app/components/Body";

export default class App extends Component{
  render(){
  return (
    <View style={styles.container}>
      <Header />
      <Mid />
      <Body />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
