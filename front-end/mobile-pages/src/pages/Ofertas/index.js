import React from 'react';
import{View, Text, Image} from 'react-native';



import style from './style';

export default function Ofertas({ navigation}){
    return(
        <View
        style={style.container}>
            <Text
            style={style.txt}> Sobre </Text>
          <Text> Seja Bem-Vindo ao Spice Mercado em Casa, 
              Confiram nossas ofertas </Text>
              <View>
              <Image
            style={style.horti}
            source={require('../assets/horti.png')}
            />
             <Text> Ofertas Horti-Frutti</Text>
             </View> 
             <View
             style={style.cerveja}>
                 <Image
            style={style.cervimg}
            source={require('../assets/cerveja.jpg')}
            />
                <Text> Ofertas Bebidas</Text> 
                  </View>
                  <View
                  style={style.mercearia}>
                      <Image
            style={style.feijao}
            source={require('../assets/feijao1.jpg')}
            />
            <Text> Ofertas Mercearia</Text>
                  </View>
            </View>
    )
}