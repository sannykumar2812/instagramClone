import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center"
    },
    left:{
        flexDirection:'row'
    },
    right:{
    margin:10
    },
    name:{
        alignSelf:'center',
        color:'black',
        fontSize: 20,
    }
})

export default styles;