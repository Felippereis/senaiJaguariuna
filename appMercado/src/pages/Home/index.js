import React from 'react';
import{View, Text, TouchableOpacity, Image} from 'react-native';
import style from './style';


import styles from './style';

export default function Home({ navigation}){
    return(
        <View 
        style={style.telaum}>
            <View>
            <Image
                style={styles.logoimg}
                    source={require('../../../assets/logo.png')}
                    />
                <Text  style={styles.textcentro} >Em breve opções de compras pelo App!</Text>
                
            </View>
            <Image
            style={styles.carimg}
                source={require('../../../assets/car.png')}
                />
            <View>
                <TouchableOpacity
                style={styles.btnsobre}
            
                onPress={ () => navigation.navigate('Ofertas')}>
                <Text style={styles.textsobre} >Ofertas!</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                style={styles.btnsobre} 
                onPress={ () => navigation.navigate('Login')}>
                    <Text style={styles.textsobre} >Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btnsobre} 
                onPress={ () => navigation.navigate('Sobre')}>
                    <Text style={styles.textsobre} >Sobre</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
   
}