import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({   
    container:{
        flex:1,        
        backgroundColor: '#9BC281',
        alignItems: 'center',
        justifyContent:'space-around',
        
    },
    txtinputs:{
        flex:1,
        backgroundColor: '#9BC281',
        alignItems:'center',
        justifyContent:'center',
       
        
    },
   inputlogin:{   
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    width:350,
    height:50,
    borderColor:'#828282',
    borderWidth:1,
    marginTop: 15,
    margin:5,
    padding:5,
    backgroundColor:'white',
    outlineColor: 'white',
    outlineStyle: 'solid'
   
   },
   logimg: {     
        
        width: 300,
        height: 100
    },
    btnacessar: {
        alignItems:'center',
        justifyContent:'center',
        color: 'white',
        textAlign: 'center',
        width: 80,
        height: 30,
        backgroundColor:'blue',
        marginTop: 15,
        margin: 8,
        padding: 2,
        paddingTop: 4,
        borderRadius: 8
    },
    btncriar: {
        alignItems:'center',
        justifyContent:'center',
        color: 'BLack',
        textAlign: 'center',       
        marginTop: 15,
        margin: 8,
        padding: 2,
        paddingTop: 4,       
        borderBottomWidth: 1,
        borderColor: 'gray'
       
    }
});