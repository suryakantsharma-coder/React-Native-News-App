import React from 'react'
import { View, Text, FlatList, TextInput, Dimensions, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { useFocusEffect } from '@react-navigation/native'
import GoogleItem from '../ListType/googleList'
import { getHistory, clearAllData } from '../components/asyncStorage'
import { addHistory } from '../components/histroyLogic'
import Container from '../Styles/Container'
import Title from '../Styles/Title'

const height = Dimensions.get('window').height


const SearchScreen = ({ navigation }) => {

    const text = 'the quick brown fox jumps over the lttel lazy dog'

    const [list, setList] = React.useState('');
    const [historyList, setHistoryList] = React.useState([]);
    const historyRef = React.useRef()

    React.useEffect(() => {
        const get = async () => {
            const get = await getHistory();
            if (get != null){
                setHistoryList(get)
                GoogleApiCall(historyList[historyList.length - 1])
            }
        }
        get()
    }, [])

    useFocusEffect(React.useCallback(() => {
        const get = async () => {
            const get = await getHistory();
            setHistoryList(get)
            console.log(get)
            // setTimeout(() => GoogleApiCall(historyList[historyList.length - 1]), 1000)
        }
        get()
    }, []))

    const dummyData = {
        "results": [
            {
                "title": "A framework for building native applications using React - GitHub",
                "description": "React Native brings React's declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native ...License: MIT License",
                "link": "https://github.com/facebook/react-native"
            },
            {
                "title": "A framework for building native applications using React - GitHub",
                "description": "React Native brings React's declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native ...License: MIT License",
                "link": "https://github.com/facebook/react-native"
            },
            {
                "title": "A framework for building native applications using React - GitHub",
                "description": "React Native brings React's declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native ...License: MIT License",
                "link": "https://github.com/facebook/react-native"
            },
            {
                "title": "A framework for building native applications using React - GitHub",
                "description": "React Native brings React's declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native ...License: MIT License",
                "link": "https://github.com/facebook/react-native"
            },

        ],
        "image_results": [],
        "total": 'NULL',
        "answers": [
            "What is React Native used for?",
            "Is React Native frontend or backend?",
            "Is Reactjs same as React Native?",
            "Can I use C++ in React Native?"
        ],
        "ts": 4.665807247161865,
        "device_region": "IN",
        "device_type": "mobile"
    }

    let value = '';

    const createItem = ({ item }) => {
        return (
            <GoogleItem
                title={item.title}
                description={item.description}
                onPress={() => {
                    navigation.navigate("News", item?.link)
                }}
            />
        )
    }

    const handleSearch = (e) => {
        value = e
    }

    const handleKeyPress = async () => {
            if (list != null) {
                addHistory(historyList, value)
                openLink(value)
            } else {
                addHistory([], value)
            }
    }

    const openLink = (value) => {
        const googleUrl = `https://www.google.com/search?q=${value}`
        navigation.navigate('News', googleUrl)
    }

    const renderHistory = ({ item }) => {
        return (
            <View style={{
                margin: 4,
                padding: 6,
                width: 'auto',
                borderColor: 'gray',
                borderWidth: 2,
                borderRadius: 20,
                borederRadius: 40,
                backgroundColor: '#404040',
            }}
            >
                <Text style={{
                    color: 'white',
                }}
                    onPress={() => openLink(item)}
                >{item}</Text>
            </View>

        )
    }

    const renderRecommendation = ({ item }) => {
        return (
            <View style={{
                margin: 4,
                padding: 6,
                width: 'auto',
                ...Container.container,
            }}>
                <Text style={{
                    ...Title.normal
                }}
                    onPress={() => openLink(item)}
                >{item}</Text>
            </View>

        )
    }

    const GoogleApiCall = async (query) => {
        try {
            const response = await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${query}`, {
                headers: {
                    'X-User-Agent': 'mobile',
                    'X-Proxy-Location': 'IN',
                    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                    'X-RapidAPI-Key': '6a65ee5bbcmsh598cdc0e4db5d5bp1fb38djsn599945b0053a'
                }
            })
            const result = await response.json()
            console.log(result)
            setList(result)
        } catch (err) {
            alert(err)
        }
    }

    const header = () => {
        return (
            <View>
                <View style={styles.searchContainer}>
                    <View style={styles.inputTextArea}>
                        <Icons style={{ width: '10%', marginTop: 10 }} name="search" color='black' size={28} />
                        <TextInput
                            style={styles.inputText}
                            placeholder='happy'
                            placeholderTextColor={'gray'}
                            spellCheck={true}
                            onChangeText={handleSearch}
                            onSubmitEditing={handleKeyPress}
                        />
                        <Icons style={{ width: '10%', marginTop: 10 }} name="mic" color='red' size={24} />
                    </View>
                </View>
                <Text style={styles.heading}>Recent History</Text>
                <FlatList
                    ref={historyRef}
                    data={historyList}
                    onContentSizeChange={() => historyRef.current.scrollToEnd()}
                    renderItem={renderHistory}
                    horizontal={true}
                />

                <Text style={styles.heading}>Searchies By Last Search</Text>
            </View>
        )
    }

    const footer = () => {
        return (
            <View>
                {(list?.answers) ?
                    <View>
                        <Text style={{ fontSize: 18, paddingLeft: 10, ...Title.subHeding  }}>People Also Search</Text>
                        <FlatList
                            data={list?.answers}
                            renderItem={renderRecommendation}
                            horizontal={false}
                        />
                    </View> :
                    null
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={list?.results}
                renderItem={createItem}
                ListHeaderComponent={header}
                ListFooterComponent={footer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        ...Container.container
        // backgroundColor: 'white',
    },
    searchContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        ...Container.container
    },
    inputTextArea: {
        width: '94%',
        marginTop: 20,
        paddingLeft: 10,
        fontSize: 19,
        color: 'black',
        borderRadius: 40,
        flexDirection: 'row',
        backgroundColor: '#404040',
        elevation: 4,
    },
    inputText: {
        width: '80%',
        marginTop: 0,
        paddingLeft: 4,
        fontSize: 19,
        color: 'black',
    },
    heading: {
        width: '100%',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        color: 'gray'
    }
})

export default SearchScreen