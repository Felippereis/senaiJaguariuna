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
    width:300,
    height:50,
    borderColor:'#828282',
    borderWidth:1,
    marginTop:5,
    margin:5,
    padding:5,
   
   },
   logimg: {     
        width: 220,
        height: 50
    } 
});