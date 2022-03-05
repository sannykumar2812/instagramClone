import React from "react";

import {
    View,
    Text,
    FlatList,
} from "react-native"
import Story from "../Story";

import styles from "./styles";

const data = [
    {
        imageUri:'https://cdn2.hubspot.net/hubfs/53/how-to-make-an-instagram-story.jpg',
        name : "Alexa"
    },{
        imageUri:'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' ,
        name : "vadim"
    },{
        imageUri: 'https://images.unsplash.com/photo-1567005753256-c0529035b300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name : "Jackey"
    },{
        imageUri: 'https://images.unsplash.com/photo-1646236181071-56229106848a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        name : "Danil"
    },{
        imageUri: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name : "Spartan"
    },{
        imageUri: 'https://images.unsplash.com/photo-1646328502766-f58b87523881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        name : "Teddy"
    },{
        imageUri: 'https://images.unsplash.com/photo-1643066469935-d0c87dda2098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name : "Kevil"
    },{
        imageUri: 'https://images.unsplash.com/photo-1646320906684-cb1dcc9bf8e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name : "Monty"
    },{
        imageUri: 'https://images.unsplash.com/photo-1646297226339-febd1eaee532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name : "Sunil"
    },{
        imageUri: 'https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name : "Nayan"
    }
    
]
const Stories = () => {    
    return(
<FlatList
showsHorizontalScrollIndicator={false}
horizontal
style={styles.container}
data={data}
keyExtractor={({name})=> name}
renderItem={({item})=> <Story imageUri={item.imageUri} name={item.name} />}
> 
</FlatList>
    )
}
export default Stories;