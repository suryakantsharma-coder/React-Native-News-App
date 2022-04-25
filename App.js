/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Appearance
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SettingScreen from './src/Screens/SettingScreen';
import {Provider} from 'react-redux'
import Store from './src/redux/Store';
import { BussinessScreenNavigation, HomeScreenNavigation, SearchScreeNavigation, TechScreenNavigation } from './src/CustomScreen';
import Container from './src/Styles/Container';


const App = () => {
  const Tab = createBottomTabNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    console.log(Appearance.getColorScheme())
  
    return () => {
      // second
    }
  }, [])
  


  return (
    <Provider store={Store}>
    <StatusBar 
      animation
      backgroundColor={'#202020'}
      barStyle='light-content'
    />
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'home') {
                iconName = 'home'
              } else if (route.name === 'business') {
                iconName = 'business'
              } else if (route.name === 'techs') {
                iconName = 'devices-other'
              } else if (route.name === 'searches') {
                iconName = 'search'
              } else if (route.name === 'setting') {
                iconName = 'settings'
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarStyle: {
              elevation: 0,
              borderTopColor : 'black',
              ...Container.container
            }
          })}
        >
          <Tab.Screen
            name="home"
            component={HomeScreenNavigation}
            options={{
              tabBarBadge : 6
            }} />
          <Tab.Screen
            name="business"
            component={BussinessScreenNavigation} />

          <Tab.Screen
            name="techs"
            component={TechScreenNavigation} />

          <Tab.Screen
            name="searches"
            component={SearchScreeNavigation} />

          <Tab.Screen
            name="setting"
            component={SettingScreen} />

        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;

// <SafeAreaView style={backgroundStyle}>
//   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//   <ScrollView
//     contentInsetAdjustmentBehavior="automatic"
//     style={backgroundStyle}>
//   </ScrollView>
// </SafeAreaView>