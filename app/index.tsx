import {View,Text,StyleSheet} from "react-native";
import Component from "./componente";


export default function App() {
  return (
    <View style={styles.central}>
      <Text style= {styles.titulo}>Conversor de Moedas</Text>
    <Component/>
    </View>
  );
}


const styles = StyleSheet.create({

  central:{
    flex:1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  titulo:{
    fontSize:25,
   color: 'white', 
  }
})