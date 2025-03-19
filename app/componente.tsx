import{Text,View,Button,TextInput,StyleSheet}from 'react-native';

import React from 'react';


export default function Component(){

    return(
      <View style ={estilos.caixa}>
        <Text style={estilos.ctitle}>Valor:</Text>
        <TextInput style={estilos.cinput}
         keyboardType='numeric'
        />

        <Button title ='Converter'/>
      </View>

    
    );
}

const estilos = StyleSheet.create({
 caixa:{
    backgroundColor: 'white',
    width: '70%',
    padding: 20,
    borderRadius:10,
    marginTop: 40,

 },

 ctitle:{
   fontSize: 20,
   fontWeight:'bold',
   color: '#2196f3',

 },

 cinput:{
   width:'100%',
   height: 40,
   borderWidth:1,
   borderColor: '#2196f3',
   marginTop: 5,
   marginBottom:17
 },

 cbotao:{

 }

})