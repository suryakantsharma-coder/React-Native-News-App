import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Container from '../Styles/Container';
import Title from '../Styles/Title';

const GoogleItem = ({ title, source, description, onPress }) => {

    const titleDemo = {
        title: "Times Of India,",
        url: 'https://www.google.com'
    };

    const arr = [titleDemo, titleDemo, titleDemo, titleDemo, titleDemo, titleDemo,]

    const [isExpend, setIsExpend] = React.useState(false);

    const setOpen = () => {
        setIsExpend(!isExpend)
        console.log(isExpend)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.infoRoot}>
                <View style={styles.textArea}>
                    <Text style={styles.title}>{title}</Text>
                    {/* <Text style={{ color: 'green', padding: 4 }}>{source || 'Times Of India'}</Text> */}
                    <Text style={{ color: 'gray', padding: 4 }}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '98%',
        flexDirection: 'row',
        borderRadius: 18,
        margin: 10,
        marginBottom: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        ...Container.container
    },
    
    thumbnailContainer: {
        width: '40%',
        height: 140,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 18,
        marginBottom: 4,
        ...Container.container
    },

    image: {
        width: '65%',
        height: 100,
        borderRadius: 10,
        margin: 10
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
        // color: '#262626',
        padding: 4,
        ...Title.titleHeading
    },
    ListText: {
        width: '100%',
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        ...Title.normal
    }

})

export default GoogleItem