import { useRoute } from '@react-navigation/native'
import React, {useState,useEffect} from 'react'

import { 
   
    SafeAreaView,
    ImageBackground,
    ActivityIndicator,
    Text,
    Image
} from 'react-native'


import styles from './styles'
import storiesData from '../../data/stories'
const StoryScreen = () => {
    const [userStories,setuserStories] = useState(null);
    const [activeStoryIndex,setactiveStoryIndex]=useState();
    const [activeStory,setactiveStory]=useState(null)
    const route = useRoute()

    useEffect(()=>{
        const userId = route.params.userId
        const userStories = storiesData.find(storyData=>storyData.user.id === userId);
        setuserStories(userStories)
        setactiveStoryIndex(0);
    },[])

    useEffect(()=>{
        if(userStories && userStories.stories.length > activeStoryIndex - 1){
        setactiveStory(userStories.stories[activeStoryIndex]);
        
        }
    },[activeStoryIndex])

    if(!activeStory){
        return(
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }
        
    return (
        <SafeAreaView style={styles.container}>
        <ImageBackground 
        style={styles.image}
        source={{uri:activeStory.imageUri}} >
        </ImageBackground>
        </SafeAreaView>
    )
}

export default StoryScreen