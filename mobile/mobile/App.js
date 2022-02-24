import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

const Stack = createNativeStackNavigator();

import Cadastro from './pages/cadastro';
import Login from './pages/login';

function LogoTitle() {
  return (
    <View 
    style={{ flex:1,flexDirection:'row', alignItems: 'center',
    justifyContent:'space-around' }}>
      <TouchableOpacity
                onPress={ () => navigation.navigate('Cadastro')}>
                <Text>Home</Text>
                </TouchableOpacity>
      <Text>Catalogo</Text>
      <Text>Monte seu bolo</Text>
      <Image
        style={{ width: 70, height: 70 }}
        source={require('./assets/logo.png')}
      />
      
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
       name="Login" 
       component={Login} 
       
        options={{ headerTitle: (props) => <LogoTitle {...props} />,
        headerStyle: {
          backgroundColor: '#F3E1E1'
        }, 
        headerTintColor: 'black'}}/>
        
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
