import React, { useState, useEffect} from "react"
import {View, Text, } from 'react-native'
import style from './style'

export default function Detalhes({ navigation,route}) {

    
const [detalhes, setDetalhes] = useState({
    "name":"",
    "abilities":[],
    "sprites":"",
    "front_default":""
}); 

const {name} =route.params

useEffect(() => {    
    let url = 'https://pokeapi.co/api/v2/pokemon/' + name ;
    fetch(url)
       .then(resp =>
        {return resp.json()
        ;})
       .then(data => 
        {setDetalhes(data)
        ;})
}, [])
    
   
    return (
        <View>
            {detalhes.abilities.map((item, index) =>
                <View><Text>{item.ability.name}</Text></View>
                          
            )}
        </View>
    )
}
