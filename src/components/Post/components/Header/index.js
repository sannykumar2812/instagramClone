import React from "react";

import Icon from 'react-native-vector-icons/Entypo'

import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";


const Header = ({imageUri,name}) => {
    return (
<View style={styles.container}>
    <View style={styles.left}>
      <ProfilePicture  uri={imageUri} size={40}  />
      <Text style={styles.name}>{name}</Text>
    </View>
    <View style={styles.right}>
      <Icon name="dots-three-horizontal" size={21} color="black" />
    </View>
</View>  
)
}

export default Header;