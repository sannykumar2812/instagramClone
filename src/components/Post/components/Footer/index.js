import React from "react";

import {
    Text,
    View
} from 'react-native'
import styles from "./styles";


const Footer = ({likescount,caption,postedit}) => {
    return (
<View style={styles.container}>
    <Text style={styles.likescount}>{likescount}</Text>
    <Text style={styles.caption}>{caption}</Text>
    <Text style={styles.postedit}>{postedit}</Text>
</View>
)
}

export default Footer;