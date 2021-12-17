import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import style from './style.js'
export default function Detalhes({ navigation, route }) {

    const { cep } = route.params;

    const [endereco, setEndereco] = useState({
        "cep": cep,
        "logradouro": "logradouro",
        "bairro": "bairro",
        "localidade": "localidade",
        "uf": "uf"
    })

    useEffect(() => {
        fetch('https://viacep.com.br/ws/'+cep+'/json', {
            "method": "GET",
            "headers": {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            return resp.json()
        }).then(data => {
            setEndereco(data)
        })
    }, [endereco])
    
    return (
        <View style={style.pag} >
            <View style={style.detalhe}>
                <View style={style.linha}><Text>cep:</Text><Text>{endereco.cep}</Text></View>
                <View style={style.linha}><Text>logradouro:</Text><Text>{endereco.logradouro}</Text></View>
                <View style={style.linha}><Text>bairro:</Text><Text>{endereco.bairro}</Text></View>
                <View style={style.linha}><Text>localidade:</Text><Text>{endereco.localidade}</Text></View>
                <View style={style.linha}><Text>uf:</Text><Text>{endereco.uf}</Text></View>
            </View>
        </View >
    )
}