import React from 'react';
import{View, Text, TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import style from './style';

export default function Login({ navigation}){
    return(
        <KeyboardAvoidingView>
        <View 
        style={style.container}
        >
            <Image
            style={style.logimg}
            source={require('../assets/logo.png')}
            />
        </View>

        <View
         style={style.txtinputs}
        >
        
            <TextInput
            style={style.inputlogin}
            placeholder="Digite seu email..."
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
                <Text>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Criar conta</Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
    );
}