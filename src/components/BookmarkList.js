import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'

const BookemarkListItem = () => {
    return (
        <View>
            <Text>Title</Text>
            <View>
                <Icons name="history" size={28} color={'black'} />
                <Text></Text>
            </View>
        </View>
    )
}

export default BookemarkListItem