import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
// import Container from '../Styles/Container'
import Title from '../Styles/Title'
import SharedContent, {SharedBookmarkData} from '../components/ShareContent'
import AlertConfirm from '../components/Alert'

const BookemarkListItem = ({ title, url, date, navigation, removeItem, index }) => {

    const openLink = () => {
        navigation.navigate('homeNews', url);
    }

    const ShareBookmarks = async (data) => {
         const a = await SharedContent(data);
    }

    const deleteShareBookmarks = () => {
        AlertConfirm(
            'Delete Bookmark',
            'are you shore to delete \n\n' + title, 
            () => removeItem(index),  
            () => console.log('dismiss')
            );
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => openLink(url)} onLongPress={deleteShareBookmarks}>
            <View style={styles.TextArea}>
                <Text style={Title.titleHeading} numberOfLines={3}>{title}</Text>
            </View>
            <View style={styles.timeSection}>
                <View style={{width : '85%'}}>
                    <Text style={Title.normal}>{`${new Date(date).getHours() - 12}:${new Date(date).getMinutes()} ${(new Date(date).getHours() > 12) ? 'PM' : 'AM'}`}</Text>
                    <Text style={Title.normal}>{date.substring(0, 10)}</Text>
                </View>
                <Icons name="share" size={24}  color={'white'} onPress={() => ShareBookmarks(SharedBookmarkData(title, url))}/>
                {/* <Icons name="delete" size={24} color={'white'} onPress={() => ShareBookmarks(SharedBookmarkData(title, url))}/> */}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '46%',
        backgroundColor: '#404040',
        borderRadius: 20,
        padding: 6,
        margin: 6,
    },
    TextArea: {
        width: '100%',
        height: 86,
        padding: 4,
        ...Title.titleHeading
    },
    timeSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent :'center',
        alignItems : 'center'
    }
})


export default BookemarkListItem