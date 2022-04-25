import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Screens/HomeScreen';
import BussinessScreen from './Screens/Bussiness';
import TechScreen from './Screens/TechScreen';
import ReadNews from './Screens/ReadNews';
import SearchScreen from './Screens/SearchScreen';
import GoogleSearchView from './Screens/googleSearchView';

const Stack = createNativeStackNavigator();

const HomeScreenNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='homeStack'
                component={HomeScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='homeNews'
                component={GoogleSearchView}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
const BussinessScreenNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='bussinessStack'
                component={BussinessScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='bussinessNews'
                component={GoogleSearchView}
                options={{ headerShown: false }}

            />
        </Stack.Navigator>
    )
}
const TechScreenNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='techStack'
                component={TechScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='techNews'
                component={GoogleSearchView}
            />
        </Stack.Navigator>
    )
}

const SearchScreeNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="search"
                component={SearchScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='News'
                component={GoogleSearchView}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export { HomeScreenNavigation, BussinessScreenNavigation, TechScreenNavigation, SearchScreeNavigation }