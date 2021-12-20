import React, { useState, useEffect} from "react"
import {View, Text,TouchableOpacity} from 'react-native'


export default function Home({ navigation}) {

    
const [lista, setLista] = useState([]);   

useEffect(() => {    
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    fetch(url)
       .then(resp =>
        {return resp.json()
        ;})
       .then(data => 
        {setLista(data.results)
        ;})
}, [])
    
   
    return (
        <View>
            {lista.map((item, index) =>
                <TouchableOpacity key={index} onPress={() => { navigation.navigate('Detalhes',{name: item.name}) }}>
                    
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}
