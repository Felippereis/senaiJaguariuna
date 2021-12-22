//import React  from 'react';
import React, { useState } from "react";
import {  View, Text,Button, TextInput } from 'react-native';
import style from './Style.js';

export default function Home({ navigation }) {

  const [cep, setCep] = useState('');
 
  const handleNavigate = () => {
    navigation.navigate('Detalhes',{"cep":cep});
  };

  return (
    <View style={ style.container }>
      
      <Text style={ style.texto }>Digite o CEP:</Text>

       <TextInput style={ style.Input} placeholder='Digite o CEP para buscar..' value={cep} onChange={(e) => { setCep(e.target.value) }}></TextInput> 

      <Button onPress={handleNavigate} title="Buscar"/>
     
    </View>
  )
}
