// import React from 'react'
// import {Animated} from 'react-native'


// const fadeAnim = useRef(new Animated.Value(0)).current;


export const fadeIn = (Animated, fadeAnim) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000
    }).start();
};

export const fadeOut = (Animated, fadeAnim) => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000
    }).start();
};