import React from "react";

import { FlatList } from "react-native";
import Post from "../Post"

import Stories from "../Stories";

const data=[
    {
        user : {
                imageUri:'https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-19/242148388_573411037240470_4404406792478697432_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=mVedXFrKYwwAX-jdtAG&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT_Cf7yRJGFXkQVNgAfktuuus9BmsxmXG7pXF8-Sve83ug&oe=622A7EF6&_nc_sid=9a90d6',
                name : "Sunny_singh__28"
            },
            imageUri:'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
            caption:'Friends forever. #insta #enjoy #funday',
            likescount : '1234 likes',
            postedit: '6 minutes ago'
    },{
        user : {
                imageUri:'https://scontent.fbho4-2.fna.fbcdn.net/v/t39.30808-6/264457617_375304531008632_9029091995696785239_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mlFH8zR_8sYAX9jTAdY&_nc_ht=scontent.fbho4-2.fna&oh=00_AT-L5pp7NulhemxrEe6BWklU5eQcdOPWjfUFKAwy9WQbBw&oe=6228776F',
                name : "viveks221"
            },
            imageUri:'https://scontent.fbho1-2.fna.fbcdn.net/v/t1.6435-9/78120099_437034840348482_6609301906529452032_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PAmbxEu60U4AX9zp3df&_nc_ht=scontent.fbho1-2.fna&oh=00_AT8inO7kzBuYcK0SdMbOSopdZupr3W0wzk-r8BjkjEmeLQ&oe=6246CEFD',
            caption:'Friends forever. #insta #enjoy #funday',
            likescount : '1234 likes',
            postedit: '6 minutes ago'
    },{
        user : {
                imageUri:'https://scontent.fbho1-2.fna.fbcdn.net/v/t1.6435-9/56716099_2295285434043161_6809843610435977216_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5wlxRdYMkYMAX9ru6ED&_nc_ht=scontent.fbho1-2.fna&oh=00_AT-VFZDxOpYKKYyu4Ns_e9Z5k_TsaWHhNXtDDWN-W9QgzQ&oe=62492A3F',
                name : "hemant_ydv_98"
            },
            imageUri:'https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/240676232_1994753027338472_2696943502413841362_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=eGxHKrtRG5MAX-fDD8N&tn=x_htFh1R6oLUClx1&_nc_ht=scontent.fbho1-2.fna&oh=00_AT-MLU0gYxGS05YaKlCnN0RrX9R067k6crjATKoZREwgPQ&oe=622702E8',
            caption:'Friends forever. #insta #enjoy #funday',
            likescount : '1234 likes',
            postedit: '6 minutes ago'
    },{
        user : {
                imageUri:'https://scontent.fbho1-1.fna.fbcdn.net/v/t1.6435-9/78080170_442562473129052_7632181413550227456_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=69v1Vy5n_3YAX8qu42J&_nc_ht=scontent.fbho1-1.fna&oh=00_AT-jMlvQcoqWH8QEHJmb3dq7uce0vpkfCAnk6D2EHGOZWg&oe=62480CCA',
                name : "Shantanusingh.in"
            },
            imageUri:'https://scontent.fbho4-1.fna.fbcdn.net/v/t1.6435-9/95203762_534092677309364_6258622366591483904_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=RUmyrDUTke0AX_0W8n1&_nc_ht=scontent.fbho4-1.fna&oh=00_AT8OGU1_mQLQ3bkLCLLBnr3N7wndM3wItw71Pr6yJViYnQ&oe=6246CB67',
            caption:'Friends forever. #insta #enjoy #funday',
            likescount : '1234 likes',
            postedit: '6 minutes ago'
    },{
        user : {
                imageUri:'https://cdn2.hubspot.net/hubfs/53/how-to-make-an-instagram-story.jpg',
                name : "Alexa"
            },
            imageUri:'https://images.unsplash.com/photo-1646243288138-72e5d006e968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            caption:'Friends forever. #insta #enjoy #funday',
            likescount : '1234 likes',
            postedit: '6 minutes ago'
    }
]

const Feed = () => {
    return(
<FlatList  
data={data}
renderItem={({item})=> <Post post={item}></Post> }
ListHeaderComponent={Stories}
/>
    )
}
export default  Feed;