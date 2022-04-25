import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { carouselColor } from './colors'


const CarouselItem = ({ title, thumbnail, time, source, description, onPress, colorIndex }) => {

    const styles = StyleSheet.create({
        container: {
            width: '98%',
            height: 380,
            borderRadius: 18,
            backgroundColor: carouselColor[colorIndex],
            // backgroundColor: '#999999',
            color: 'black',
            margin: 10,
            marginBottom: 10,
            borderBottomColor: 'gray',
            // borderBottomWidth: 1,
            // elevation: 8,
        },
    
        thumbnailContainer: {
            width: '100%',
            height: 250,
            flexDirection: 'row',
            justifyContent: 'center',
            borderTopLeftRadius : 10,
            borderTopRightRadius : 10,
            backgroundColor: 'white',
            color: 'black',
            marginBottom: 4,
        },
        
        image: {
            width: '100%',
            borderTopLeftRadius : 10,
            borderTopRightRadius : 10,
        },
    
        timeIcon: {
            padding: 2,
            color: 'black',
        },
    
        infoRoot: {
            width: '100%',
        },
    
        infoTimeSection: {
            width: "100%",
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 4
        },
    
        textArea: {
            width: '100%',
            padding: 4
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            padding: 4
        }
    
    })

    // const titleDemo = "Times Of India Times Of India  Times Of India Times Of India Times Of India Times Of India";

    return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={onPress}>
            <View style={styles.thumbnailContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: thumbnail || 'https://www.pentrental.com/wp-content/uploads/2019/06/Singapore-scaled.jpg' }}
                    size={'100%'} />
            </View>
            <View style={styles.infoRoot}>
                <View style={styles.textArea}>
                    <Text style={{ color: 'black', padding: 4 }}>{source || 'Times Of India'}</Text>
                    <Text style={styles.title}>{title?.substring(0, 60)}...</Text>
                    {/* <Text style={{ color: 'white' }}>{description?.substring(0,180)}...</Text> */}
                    <View style={styles.infoTimeSection}>
                        <Icons name="history" size={18} style={styles.timeIcon}></Icons>
                        <Text style={{ color: 'black' }}>{new Date(time).toLocaleString() || "12 nov 2022"}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}



export default CarouselItem