import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Container from '../Styles/Container';
import Title from '../Styles/Title';

const ListItem = ({ title, thumbnail, time, source, onPress }) => {

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
            <View style={styles.thumbnailContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: thumbnail || 'https://www.pentrental.com/wp-content/uploads/2019/06/Singapore-scaled.jpg' }}
                    size={'100%'} />
            </View>
            <View style={styles.infoRoot}>
                <View style={styles.textArea}>
                    <Text style={{ color: 'gray' }}>{source}</Text>
                    <Text style={Title.titleHeading}>{title.toString().substring(0, 60)}...</Text>
                    <View style={styles.infoTimeSection}>
                        <Icons name="history" size={18} style={styles.timeIcon}></Icons>
                        <Text style={{ color: 'gray' }}>{new Date(time).toLocaleString() || '12 nov 2022'}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 325,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        marginBottom: 20,
        ...Container.container
    },
    thumbnailContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
        marginBottom: 4,
        ...Container.container
    },


    image: {
        width: '90%',
        height: 200,
        borderRadius: 18,
    },

    timeIcon: {
        padding: 2,
        color: 'black',
    },

    infoRoot: {
        flexDirection: 'row',
    },

    infoTimeSection: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 4
    },

    textArea: {
        width: '100%',
        padding: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }

})

export default ListItem;