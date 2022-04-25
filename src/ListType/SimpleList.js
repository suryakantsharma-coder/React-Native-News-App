import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Container from '../Styles/Container'
import Title from '../Styles/Title'


const SimpleItem = ({ title, thumbnail, time, source, onPress }) => {

    // const titleDemo = "Times Of India Times Of India  Times Of India Times Of India Times Of India Times Of India";

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
            <View style={styles.infoRoot}>
                <View style={styles.textArea}>
                    <Text style={{ color: 'gray', padding : 4 }}>{ source ||'Times Of India'}</Text>
                    <Text style={Title.titleHeading}>{title.substring(0,60)}...</Text>
                    <View style={styles.infoTimeSection}>
                        <Icons name="history" size={18} style={styles.timeIcon}></Icons>
                        <Text style={{ color: 'gray' }}>{new Date(time).toLocaleString() || "12 nov 2022"}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.thumbnailContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: thumbnail || 'https://www.pentrental.com/wp-content/uploads/2019/06/Singapore-scaled.jpg' }}
                    size={'100%'} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '98%',
        height: 140,
        flexDirection: 'row',
        borderRadius: 18,
        margin: 10,
        marginBottom: 10,
        borderBottomColor : 'gray',
        borderBottomWidth : 1,
        ...Container.container
        // elevation: 8,
    },

    thumbnailContainer: {
        width: '40%',
        height: 140,
        flexDirection: 'row',
        justifyContent : 'center',
        borderRadius: 18,
        color: 'black',
        marginBottom: 4,
        ...Container.container
    },

    image: {
        width: '65%',
        height: 100,
        borderRadius: 10,
        margin : 10
    },

    timeIcon: {
        padding: 2,
        color: 'black',
    },

    infoRoot: {
        width: '60%',
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

export default SimpleItem