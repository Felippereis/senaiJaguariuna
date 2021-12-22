import React from 'react';
import{View, Text, TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import style from './style';

export default function Login({ navigation}){
    return(
        <KeyboardAvoidingView  style={style.container}>
      
        <View
         style={style.txtinputs}
        >
             <Image
            style={style.logimg}
            source={require('../../../assets/logo.png')}
            />
        
            <TextInput
            style={style.inputlogin}
            placeholder="Digite seu CPF..."
            autoCorrect={false}
            onChangeText={() =>{}}
            />

            <TextInput
            style={style.inputlogin}
            placeholder="Digite sua senha..."
            autoCorrect={false}
            onChangeText={() =>{}}
            />

            <TouchableOpacity>
                <Text style={style.btnacessar}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => { navigation.navigate("Cadastro") }}>
                <Text style={style.btncriar}>Não tem acesso? Criar conta</Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
    );
}