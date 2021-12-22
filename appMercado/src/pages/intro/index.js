import React from 'react';
import{View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: '1',
      title: 'Toda SEMANA oferta diferente',
      text: 'Todos nossos setores com ofertas semanais, entre no App para conferir!',
      image: require('../../../assets/oferta.png')
    },
    {
      key: '2',
      title: 'Delivery Grátis',
      text: 'Compre no conforto da sua casa pelo nosso App, e receba sem pagar nenhuma taxa Frete Grátis!Confira o regulamento no App.',
      image: require('../../../assets/delivery.png')
    },
    {
      key: '3',
      title: 'Conheça Spice Mercado!',
      text: 'Estamos caminhando em um novo conceito para que possa realizar suas compras! ',     
      image: require('../../../assets/logo.png')
    },
  ];
export default function Intro({ navigation}){
    function renderSlides({ item }) {
        return(
          <View style={{flex:1,alignItems: 'center', 
          justifyContent: 'center', backgroundColor: '#9BC281', 
          height: '100%'}}>
            <Image
              source={item.image}
              style={{
                resizeMode: 'contain',
                height: 350,
                width: '90%',
                
               
              }}
            />
            <Text
            style={{
              paddingTop: 25,
              paddingBottom: 10,
              fontSize: 23,
              fontWeight: 'bold',
              color: '#009CFF',
              alignSelf: 'center'
            }}>
              {item.title}
              
            </Text>
            <Text
              style={{
                textAlign:'center',
                color: 'red',
                paddingHorizontal: 25,
                fontSize: 18
              }}
            >
              {item.text}
              
            </Text>
    
          </View>
        )
    
      }

    return (
        <View style={{flex:1, backgroundColor: '#9BC281'}}>
        <AppIntroSlider 
                renderItem={renderSlides}
                data={slides}
                activeDotStyle={{
                backgroundColor: '#009CFF',
                width:30
                }}
                renderNextButton={ () => <Text style={{fontWeight: 'bold'}}>Próximo</Text>}
                renderDoneButton={ () => <Text 
                style={{fontSize: 18,
                    fontWeight: 'bold',
                    backgroundColor: '#DBE5AC',
                    borderRadius: 8,
                    padding: 5}}>Acessar</Text>}
                onDone={ () => { navigation.navigate("Home") }}
            />
        </View>
    );
}