import { useNavigation, useRoute } from '@react-navigation/native'
import React, {useState,useEffect} from 'react'
import ProfilePicture from '../../components/ProfilePicture'

import { 
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    ActivityIndicator,
    TextInput,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native'


import styles from './styles'
import storiesData from '../../data/stories'
const StoryScreen = () => {
    const [userStories,setActiveStories] = useState(null);
    const [activeStoryIndex,setActiveStoryIndex]=useState();
    // const [activeStory,setActiveStory]=useState(null)
    const route = useRoute()
    const navigation = useNavigation();
    const userId = route.params.userId;
    // console.log(userId)



    useEffect(()=>{
        const userStories = storiesData.find(storyData=>storyData.user.id === userId);
        setActiveStories(userStories)
        setActiveStoryIndex(0);
    },[])


    const navigateToNxtUser = () => {
        navigation.push("Story",{userId:(parseInt(userId)+1).toString()})
    }

    const navigateToPrevUser = () => {
        navigation.push("Story",{userId:(parseInt(userId)-1).toString()})
    }
    // useEffect(()=>{
    //     if(!userStories){
    //         return;
    //     }

    //     if(activeStoryIndex < 0){
    //         setActiveStories(0);
    //         return;
    //     }

    //     if(activeStoryIndex >= userStories.stories.length ){
    //         setActiveStories(userStories.stories.length-1);
    //         return;
    //     }

    //     setActiveStory(userStories.stories[activeStoryIndex]);       
    // },[activeStoryIndex])


//handle the nxt story
    const handleNextStory = () => {
        if (activeStoryIndex >= userStories.stories.length - 1) {
            navigateToNxtUser()
        return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }
    
    //handle the preivous story
    const handlePrevStory = () => {
        if (activeStoryIndex <= 0) {
            navigateToPrevUser()
        return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);
    }
    
    //press on the storyscreen
    const handlePress = (evt) => {
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;
        if (x < screenWidth / 2) {
        handlePrevStory();
        } else {
            handleNextStory();
            }
    }


    if(!userStories){
        return(
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }

const activeStory = userStories.stories[activeStoryIndex];

    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress} >
                <ImageBackground  style={styles.image} source={{uri:activeStory.imageUri}}>
                <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            {/* <Text style={styles.postedTime}>{userStories.createdAt}</Text> */}
          </View>
          </ImageBackground>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default StoryScreen