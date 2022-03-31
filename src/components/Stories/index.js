import React from "react";

import {
    View,
    Text,
    FlatList,
} from "react-native"
import Story from "../Story";

import styles from "./styles";
import storiesData from '../../data/stories'
const Stories = () => {    
    return(
<FlatList
showsHorizontalScrollIndicator={false}
horizontal
style={styles.container}
data={storiesData}
keyExtractor={({name})=> name}
renderItem={({item})=> <Story story={item} />}
> 
</FlatList>
    )
}
export default Stories;