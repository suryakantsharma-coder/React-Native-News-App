import React from 'react'
import { View, Text, Dimensions, BackHandler, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import WebView from 'react-native-webview'
import WebProgress from '../components/webProgress';
import ProgressBar from 'react-native-progress/Bar';
import Icons from 'react-native-vector-icons/MaterialIcons'
import { setBookmarks, getBookmarks } from '../components/asyncStorage';

let ScreenHeight = Dimensions.get("window").height;

const GoogleSearchView = ({ route }) => {
    const item = route.params
    const [progress, setProgress] = React.useState(0);
    const webViewRef = React.useRef();
    const [currentInfo, setCurrentInfo] = React.useState();
    const [isBackPressed, setIsbackPressed] = React.useState(false);



    const GoBack = () => {
        webViewRef.current.goBack()
    }

    const onNavigationChange = (navigation) => {
        const { title, url, canGoBack, canGoForward } = navigation
        console.log(canGoForward)
        setCurrentInfo({ title, url, date : new Date().toLocaleString()})
        setIsbackPressed({ canGoBack, canGoForward });
        console.log(title, canGoBack);
    }


    const AddBookMark = async () => {
        if (currentInfo) {
            const data = await getBookmarks();
            console.log(data)
            let newData = []
            if(data != null)
                newData = [...data, currentInfo]
            else 
                newData = [currentInfo]
            const ok = await setBookmarks(newData);
            alert(ok);
        }
    }


    return (
        <>
            <View style={styles.container}>
                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={styles.footerIcon}>
                            <TouchableOpacity activeOpacity={1} disable={isBackPressed.canGoBack}>
                                <Icons name='arrow-back' size={28} color={(isBackPressed.canGoBack) ? 'black' : 'gray'} onPress={GoBack} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footerIcon}>
                            <TouchableOpacity activeOpacity={1} disable={isBackPressed.CanGoForward}>
                                <Icons name='arrow-forward' size={28} color={(isBackPressed.canGoForward) ? 'black' : 'gray'} onPress={() => webViewRef.current.goForward()} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footerIcon}>
                            <Icons name='refresh' size={28} color={'black'} onPress={() => webViewRef.current.reload()} />
                        </View>
                        <View style={styles.footerIcon}>
                            <Icons name='folder-special' size={28} color={'black'}  onPress={AddBookMark}/>
                        </View>
                    </View>
                </View>

                {(parseInt(progress * 100) < 100) ?  <ProgressBar style={{ borderRadius : 0, height : 4}} width={null} animationType={'spring'} progress={parseFloat(progress)} />: null}

                <WebView
                    ref={webViewRef}
                    source={{
                        uri: item || 'https://google.com'
                    }}
                    onNavigationStateChange={onNavigationChange}
                    javaScriptEnabled
                    onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: ScreenHeight - 54,
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
    }

    , progressView: {
        width: '100%',
        height: 100,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
    },

    footer: {
        width: '100%',
        height: 40,
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255,0.94)',
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    Header: {
        width: '100%',
        height: 40,
        position: 'absolute',
        top: 0,
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255,0.94)',
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    footerIcon: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default GoogleSearchView

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
}



const ifCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return contentOffset.y == 0;
}
