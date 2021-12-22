import React from 'react';
import{View, Image, Text} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import style from './style';

export default function Sobre({ navigation}){
    return(
        <View style={{backgroundColor: '#9BC281', flex:1, alignItems:'center'}}>  
        <Image
                style={style.logo}
                    source={require('../../../assets/logo.png')}
        />
                              
            <Text style={style.txsobre}> Sobre </Text>
            <View>
          <Text
           style={style.txtexto}
           > Seja Bem-Vindo ao Spice Mercado em Casa, uma loja on-line criada para levar os produtos de diversas marcas direto para sua mesa, sem você precisar sair de casa, com toda qualidade e segurança alimentar que já conhece, trazendo mais comodidade, praticidade e agilidade para o seu dia-a-dia.

Disponível 18 horas por dia, 7 dias por semana, queremos estar presentes em todas as suas refeições, levando os produtos das marcas preferidas do seu dia-a-dia. Aqui você poderá conhecer todo nosso amplo portfólio de produtos.

Além disso, você vai encontrar todas nossas inovações e lançamentos.
 Todos os produtos que você conhece e gosta estarão disponíveis de forma prática e rápida, tornando seus dias muito mais gostosos.

Em nossa loja on-line, você encontrará produtos extremamente frescos, levados direto dos produtores para sua casa, com toda agilidade que você precisa.

Aproveite o Spice Mercato em Casa!

Obrigado. </Text>
    
    <Text style={{borderBottomWidth:1,fontSize:18,color:'gray'}}> 
    Localização:
    </Text>
            <Text 
            style={style.txend}
            >
            CEP: 13820-000      SÃO PAULO      De Segunda a Segunda 05:00 - 23:00
            </Text>
            <Text style={{borderTopWidth:1,fontSize:18,color:'gray'}}> 
                  Siga-nos nas nossas redes sociais:
            </Text>
            <View style={style.rsocial}>
            <Image
                style={style.redes}
                    source={require('../../../assets/tik.png')}
                    
            />
            <Image
                style={style.redes}
                    source={require('../../../assets/face.png')}
                    
            />
            <Image
                style={style.redes}
                    source={require('../../../assets/insta.png')}
                    
            />
            </View>
        </View>
        </View>
          
    )
}