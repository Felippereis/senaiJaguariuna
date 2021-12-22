import React, {useState} from "react";
import { View, Text, Image} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Ofertas from './src/pages/Ofertas';
import Login from './src/pages/Login';
import Intro from './src/pages/Intro';
import Cadastro from './src/pages/Cadastro';


const Stack = createStackNavigator();



export default function App(){
  const [showHome, setShowHome] = useState(false);

    return(
      <NavigationContainer >
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen 
        name="Intro" 
        component={Intro}
        options={{
          title: 'Bem vindo Spice Mercado',
          headerStyle: {
            backgroundColor: '#5C8A7F'
          },
          
          headerTintColor: '#FFF'
        }}
        
        />
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title: 'Bem vindo Spice Mercado',
          headerStyle: {
            backgroundColor: '#5C8A7F'
          },
          
          headerTintColor: '#FFF'
        }}
        
        />
  
        <Stack.Screen 
        name="Sobre" 
        component={Sobre}
        options={{
          title:'Sobre SpiceMercado',
          headerStyle:{
            backgroundColor:'#5C8A7F'
          },
          headerTintColor:'#FFF'
        }}
        
        />
        <Stack.Screen 
        name="Ofertas"
         component={Ofertas}
         options={{
          title: 'Confira nossas ofertas!',
          headerStyle: {
            backgroundColor: '#5C8A7F'
          },
          headerTintColor: '#FFF'
        }}
         /> 
  
         <Stack.Screen
         name='Login'
        component={Login}
        options={{
        title: 'Faça login para Acessar sua conta',
        headerStyle: {
          backgroundColor: '#5C8A7F'
          },
        headerTintColor: '#FFF'
          }}
          />

        <Stack.Screen
         name='Cadastro'
        component={Cadastro}
        options={{
        title: 'Faça seu cadastro no APP',
        headerStyle: {
          backgroundColor: '#5C8A7F'
             },
        headerTintColor: '#FFF'
             }}
         />
      </Stack.Navigator>
      </NavigationContainer>
    )
    
  
 
}
