import { StyleSheet} from 'react-native';
import { Directions } from 'react-native-gesture-handler';


export default StyleSheet.create({   
    txsobre: {
        fontSize: 22,
        color: 'gray',
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        paddingTop: 15,
        marginTop: 25,
        width: 275,
        height: 90
    },        
    txtexto: {
        color: 'black',
        alignItems:'center',
        justifyContent:'center',
        margin: 2,
        
    },
    rsocial: {
        flex: 1,
        flexDirection: 'row',
        
        alignItems:'center',
        justifyContent: 'space-around',

    },
    txend: {
        color: 'gray',
        alignItems:'center',
        justifyContent:'center',
        margin: 2,
    },
    redes:{
        paddingTop: 2,
        marginTop: 25,
        width: 70,
        height: 75
    }        

})