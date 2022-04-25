import React from 'react'
import { View, Text, Image, ScrollView, Dimensions, Linking, StyleSheet } from 'react-native'
import WebView from 'react-native-webview'
import Bar from 'react-native-progress/Pie'
import WebProgress from '../components/webProgress';
// import Icons from 'react-native-vector-icons/MaterialIcons'

let ScreenHeight = Dimensions.get("window").height;

const ReadNews = ({ route }) => {
    const item = route.params
    const [progress, setProgress] = React.useState(0);
    console.log(item)

    return (
        <>
            <View style={styles.container}>
                <WebView
                    source={{
                        uri: item || 'https://google.com'
                    }}
                    javaScriptEnabled
                    onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
                // style={{ marginTop: 0, width: '100%', height: '100%' }}
                />


                {/* <View style={styles.thumbnailContainer}>
                    <Image style={styles.image} source={{ uri: item?.urlToImage || 'https://www.pentrental.com/wp-content/uploads/2019/06/Singapore-scaled.jpg' }} size={'100%'} />
                </View>

                <View style={styles.textSection}>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={{ color: 'gray', fontSize: 19 }}>{item.content}</Text>
                    <Button  title='Read Full Artical' onPress={OpenLink}>{Linking.openURL('https://google.com')}</Button>
                </View> */}


                {/* <View style={styles.rowContainer}>
                    <View style={styles.bottomContainer}>
                        <Icons name='share' size={20} color='white'/>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Icons name='open-in-new' size={20} color='white'/>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Icons name='share' size={20} color='white'/>
                    </View>
                </View> */}
            {(parseInt(progress * 100) < 100) ? <WebProgress progress={progress} /> : null}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: ScreenHeight,
        // flex : 1,
        backgroundColor: 'white'
    },

    thumbnailContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
    },


    image: {
        width: '96%',
        height: 260,
        borderRadius: 18,
    },

    title: {
        fontSize: 34,
        paddingBottom: 8,
        fontWeight: 'bold',
        color: 'black'
    },

    textSection: {
        width: '100%',
        padding: 8,
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    bottomContainer: {
        margin: 4,
        padding: 8,
        elevation: 8,
        borderRadius: 40,
        backgroundColor: 'red',
        // flexDirection : 'row',
        // justifyContent : 'flex-start'
    }

    , progressView: {
        width: '100%',
        height: 100,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
    }


})

export default ReadNews