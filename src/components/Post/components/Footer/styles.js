import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:5
    },
    likescount :{
        fontWeight:'bold',
        margin:3,
        fontSize:16,
        color:'#1a1919', 
    },
    left:{
        flexDirection:'row',
        width:110,
        justifyContent:'space-between',
    },
    iconsContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            margin:10
    },
    caption :{
        margin:3,
        color:'#1a1919',
        fontFamily: 'sans-serif',
        

    },postedit :{
        margin:3,
        color:'#8c8c8c',
        

    },

})

export default styles;