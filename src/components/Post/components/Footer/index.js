import React ,{useState, useEffect} from "react";

import {
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native'

import styles from "./styles";
import ADIcon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from  'react-native-vector-icons/FontAwesome';



const Footer = ({likesCount:likesCountProp,caption,postedit}) => {


//  { changing on click the like button or increase descrease the number}
const [isLiked, setIsLike] = useState(false);
const [ likesCount, setLikesCount] = useState(0);


    const onLikePressed = () => {
        // const amount = isLiked ? -1 : 1;
        // setLikesCount(likesCount + amount);
    
        setIsLike(!isLiked);
    }
    
    useEffect(() =>{
        setLikesCount(likesCountProp)
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.left}>
                    <TouchableWithoutFeedback 
                            onPress={ onLikePressed } >
                            {
                            // condition for click on the like button 
                            isLiked ? <ADIcon name="heart" size={26} color={"red"} ></ADIcon> :
                            <ADIcon name="hearto" size={26} color={"#1a1b1c"} ></ADIcon>
                            }
                    </TouchableWithoutFeedback>
                            <Fontisto name="comment" size={26} color={"#1a1b1c"}></Fontisto>
                            <Ionicons name="md-paper-plane-outline" size={26} color={"#1a1b1c"}></Ionicons>
                </View>
                <FontAwesome name="bookmark-o" size={26} color={"#1a1b1c"} ></FontAwesome>
            </View>    
            <Text style={styles.likescount}>{likesCount}</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedit}>{postedit}</Text>
        
        </View>
    )
}

export default Footer;