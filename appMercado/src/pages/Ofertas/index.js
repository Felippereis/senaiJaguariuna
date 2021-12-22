import React from 'react';
import{View, Text, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



import style from './style';

export default function Ofertas({ navigation}){
    return(
      <View style={style.container}>
        <ScrollView>
          <Text style={style.txt}> Seja Bem-Vindo ao Spice Mercado em Casa.</Text>
          <Text style={{alignItems:'center',justifyContent:'center'}}>Confiram nossas ofertas</Text>
          <View>
				    <TouchableOpacity onPress={() => {}}>
					    <Text style={style.textos}> Promoções da Semana</Text>
					    <Image style={style.ofert} source={require('../../../assets/promocao.jpg')}/>
				    </TouchableOpacity>              
          </View>
          <View>
				    <TouchableOpacity onPress={() => {}}>
					    <Text style={style.textos}> Ofertas Horti-Frutti</Text>
					    <Image style={style.ofert} source={require('../../../assets/hortifruti.jpg')}/>
				    </TouchableOpacity>              
          </View>
          <View>
				    <TouchableOpacity onPress={() => {}}>
					    <Text style={style.textos}> Ofertas Bebidas</Text>
					    <Image style={style.ofert} source={require('../../../assets/bebida.jpg')}/>
				    </TouchableOpacity>              
          </View>
          <View>
				    <TouchableOpacity onPress={() => {}}>
					    <Text style={style.textos}> Ofertas Mercearia</Text>
					    <Image style={style.ofert} source={require('../../../assets/mercearia.jpg')}/>
				    </TouchableOpacity>              
          </View>
        </ScrollView>
      </View>
    )

}