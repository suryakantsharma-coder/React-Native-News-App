import React from 'react'
import { View, Text, Image, PermissionsAndroid, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Geolocation from 'react-native-geolocation-service';
import { checkPermission, askPermission, Info, Options } from './askPermission';
import Title from '../Styles/Title';

const WeatherModule = () => {

    const [data, setData] = React.useState({});

    React.useEffect(() => {
        // askPermission()
        // console.log(PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION))
        if (PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) <= 1) {
            success();
        } else {
            Info.title = 'This App Need Your Location'
            Info.message = 'This App Need Your Location For Weather Info'
            askPermission(Info, PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, success, error, NAA)
        }

    }, [])

    const success = (sucess) => {
        Geolocation.getCurrentPosition(
            (position) => {
                getWeatherReport(position.coords.latitude, position.coords.longitude);
            },
            (err) => {
                console.log(err.code, err.message)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )

    }

    const error = (error) => {
        alert(error);
    }

    const NAA = (err) => {
        alert(err);
    }

    const getWeatherReport = async (lat, lon) => {
        const api_key = '2f5b549442ef551ba85084f8174e3902';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`);
        const result = await response.json()
        console.log(result)
        setData(result)
    }


    return (
        <View style={styles.container}>
            <View style={styles.InfoBox}>
                <View style={styles.textArea}>
                    <Text style={styles.TextTitle}>Hi ! Surya</Text>
                    <Text style={styles.normalText}>{data?.name + ", " + data?.sys?.country}</Text>
                    <Text style={styles.normalText}></Text>
                    <Text style={styles.normalText}>min {(parseFloat(data?.main?.temp_min)- 273.15).toPrecision(2)}°C, max {(parseFloat(data?.main?.temp_max)- 273.15).toPrecision(2)}°C</Text>
                    <Text style={{fontSize : 14, color : 'gray'}}>Pressure {data?.main?.pressure} hPa, Humidity {data?.main?.humidity}%</Text>
                </View>

                <View style={styles.IconArea}>
                    <Image style={{width : '100%', height : 40}} source={{uri : `http://openweathermap.org/img/wn/10d@2x.png`}} />
                    <Text style={styles.normalTextArea}>{(parseFloat(data?.main?.temp) - 273.15).toPrecision(2)}°C</Text>
                    <View style={styles.InfoBox}>
                        <Icons name="waves" style={{marginRight : 4}} size={20} color="gray" />
                        <Text style={styles.normalText}>{parseFloat(data?.wind?.speed).toPrecision(2)} <Text style={{fontSize : 10}}>m/s</Text></Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        backgroundColor: '#404040',
        elevation: 8,
        margin: 20,
        padding : 10,
        borderRadius: 18,
    },

    InfoBox: {
        flexDirection: 'row',
        color: 'black',
        // backgroundColor: 'blue',
        padding: 4,
        // borderRadius: 18,
    },

    textArea: {
        width: '70%',
        color: 'black',
    },

    IconArea: {
        width: '30%',
        color: 'black',
        padding: 10
    },

    TextTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        ...Title.titleHeading
    },

    normalText: {
        fontSize: 15,
        color: 'gray'
    },
    normalTextArea: {
        width : '100%',
        textAlign : 'center',
        fontSize: 15,
        color: 'gray'
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        margin: 10
    },

    weatherHorizontal: {
        borderRightColor: 'gray',
        borderRightWidth: 1,
        borderTopRightRadius: 10,
        textAlign: 'center',
        padding: 4,
        margin: 10
    }
})

export default WeatherModule

