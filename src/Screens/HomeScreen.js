import React from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Switch } from 'react-native'
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { useFocusEffect } from '@react-navigation/native'
import SimpleItem from '../ListType/SimpleList'
import WeatherModule from '../components/WeatherModule'
import Carousel from 'react-native-snap-carousel';
import CarouselItem from '../ListType/CarousalList';
import { getBookmarks, clearAllData, setBookmarks } from '../components/asyncStorage';
import Title from '../Styles/Title'
import Container from '../Styles/Container';
import { useSelector, useDispatch } from 'react-redux';
import { setItem } from '../redux/Slice/BookmarkSlice';
import BookemarkListItem from '../ListType/BookmarkList';

const HomeScreen = ({ navigation }) => {


    let bookmarkData = useSelector(state => state.bookmark.data)
    const dispatch = useDispatch();
    const [array, setArray] = React.useState([]);
    // const [bookmarkList, setBookMarkList] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [isEnabled, setIsEnabled] = React.useState(false);

    React.useEffect(() => {
        getData();
    }, [])


    useFocusEffect(React.useCallback(() => {
        readAllBookmarks()
        console.log('focus')
    }, []))

    const readAllBookmarks = async () => {
        const data = await getBookmarks();
        dispatch(setItem(data));
    }

    const SetItemClick = (data) => {
        navigation.navigate('News', data)
    }

    const renderOneByOne = ({ item }) => {
        // console.log(e)
        return <SimpleItem
            title={item?.title}
            thumbnail={item?.urlToImage}
            source={item?.source.name}
            time={item?.publishedAt}
            onPress={() => {
                navigation.navigate('News', item?.url)
            }} />
    }

    const LoadingLayout = ({ item, index }) => {
        return (
            <CarouselItem
                title={item?.title}
                thumbnail={item?.urlToImage}
                source={item?.source.name}
                time={item?.publishedAt}
                description={item?.description}
                scrollInterpolator={10}
                colorIndex={parseInt((index <= 10) ? index : index / 10)}
                onPress={() => {
                    navigation.navigate('homeNews', item?.url)
                }} />
        )
    }

    const getData = () => {
        fetch(`https://newsapi.org/v2/everything?q=apple&from=${new Date().getDate()}&to=2022-04-10&sortBy=popularity&apiKey=94434489e8604f8687f679117b1b9523`)
            .then((response) => {
                return response.json();
            }).then((result) => {
                setArray(result.articles)
            })
    }

    const LoadData = () => {
        if (currentPage <= 4) {
            // setTimeout(() => {
            //     setArray([...array, 1, 2, 3, 4, 5, 6, 7, 8, 9])
            //     console.log(array.length + "this ");
            //     setCurrentPage(currentPage + 1);
            // }, 4000)
        }
    }

    const removeBookmarks = async (index) => {
        try {

            let data = await getBookmarks();
            const deleted = data.shift(index, 1);
            await setBookmarks(data);
            dispatch(setItem(data));
            console.log(data)
        } catch (err) {
            console.log(err.message)
        }
    }

    const bookMItem = ({ item, index }) => {
        return (
            <BookemarkListItem
                index={index}
                title={item.title}
                url={item.url}
                date={item.date}
                navigation={navigation}
                removeItem={removeBookmarks}
            />
        )
    }

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <>
            <View style={Container.fullContainer}>
                {(array.length > 0) ?
                    <FlatList
                        data={bookmarkData}
                        numColumns={2}
                        keyExtractor={({ index }) => index}
                        renderItem={bookMItem}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={
                            <>
                                <Text style={Title.heading}>News</Text>
                                <WeatherModule />
                                <View>
                                    <Text style={Title.subHeding}>Latest News</Text>
                                </View>
                                <Carousel
                                    data={array}
                                    renderItem={LoadingLayout}
                                    layout='stack'
                                    layoutCardOffset={20}
                                    sliderWidth={400}
                                    itemWidth={300}
                                    loop={true}
                                />
                                <View>
                                    <Text style={{ margin: 10, ...Title.subHeding }}>Bookmarked</Text>
                                </View>
                            </>
                        }

                    />
                    :
                    <View style={{ width: '100%', height : '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Progress.Circle style={{ marginTop: '60%' }} borderWidth={3} size={40} indeterminate={true} color="black" /> */}
                        <ActivityIndicator size="large" color="#141414" />
                    </View>
                }
            </View>
        </>
    )
}



export default HomeScreen
