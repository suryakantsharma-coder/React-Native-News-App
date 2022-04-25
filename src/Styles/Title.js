import {StyleSheet} from 'react-native'


const HeadingColor = '#ffffff'
const SubHeadingColor = '#ffffff'

export default Title = StyleSheet.create({
    heading : {
        fontSize: 30,
        fontWeight: 'bold',
        color: HeadingColor,
        padding: 10
    },
    subHeding : {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: SubHeadingColor,
    },
    normal : {
        paddingLeft : 10,
        color : SubHeadingColor,
    },
    grayNoraml : {
        paddingLeft : 10,
        color : 'gray',
    },
    titleHeading : {
        fontSize: 18,
        fontWeight: 'bold',
        color: HeadingColor
    }
})