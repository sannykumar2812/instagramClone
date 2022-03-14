import React from "react";

import {
    Text,
    View
} from 'react-native'

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


const Post = ( {post} ) => {
    return (
<View>
    <Header imageUri={post.user.imageUri} name={post.user.name} />
    <Body imageUri={post.imageUri} />
    <Footer likesCount={post.likesCount} 
    caption={post.caption} 
    postedit={post.postedit} 
    />
</View>
    )
}

export default Post;