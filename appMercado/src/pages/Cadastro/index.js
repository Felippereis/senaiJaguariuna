import React from 'react';
import { View, Image } from 'react-native';

import style from './style';


export default function Cadastro({ navigation}){
    return(
        <View  style={style.container}>
            <View style={style.formulario}>
            <form>
                 <label>
                       Nome:
                <input                 
                type="text" name="name" 
              
               />
                </label>
                <label>
                        Email:
                <input type="email" name="email" />
                </label>
                <label>
                        Endereço:
                <input type="text" name="endereco" />
                </label>
                <label>
                        Telefone:
                <input type="text" name="endereco" />
                </label>

                <label>
                        Telefone:
                <input type="text" name="endereco" />
                </label>

                <label>
                        Telefone:
                <input type="text" name="endereco" />
                </label>

                <label>
                        Telefone:
                <input type="text" name="endereco" />
                </label>

                <label>
                        Telefone:
                <input type="text" name="endereco" />
                </label>

                <label>
                        Telefone:
                <input type="text" name="endereco" />
                </label>

                <input type="submit" value="Enviar" />
                </form>
                </View>
         </View>
    )
}