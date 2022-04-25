import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native'
import SimpleItem from '../ListType/SimpleList'
import * as Progress from 'react-native-progress'
import Tittle from '../Styles/Title'
import Title from '../Styles/Title'
import Container from '../Styles/Container'

const TechScreen = ({navigation}) => {
    const [array, setArray] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);

    React.useEffect(() => {
        getData();
    }, [])

    const renderOneByOne = ({ index, item }) => {
        console.log(item)
        return <SimpleItem
            title={item?.title}
            thumbnail={item?.urlToImage}
            source={item?.source.name}
            time={item?.publishedAt}
            onPress={() => {
                navigation.navigate('techNews', item?.url)
                console.log('click')
            }}
        />
    }


    const LoadingLayout = () => {
        return (
            <>
                {(currentPage <= 4) ? <View style={styles.LoadingBox}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Loading...<Progress.Circle borderWidth={3} size={18} indeterminate={true} color="white" /></Text>
                </View> : null
                }
            </>
        )
    }

    const getData = () => {
        fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=94434489e8604f8687f679117b1b9523")
            .then((response) => {
                return response.json();
            }).then((result) => {
                setArray(result.articles)
            })
    }

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={<Text style={Title.heading}>Tech News</Text>}
                data={array}
                renderItem={renderOneByOne}
                ListFooterComponent={LoadingLayout}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        ...Container.container
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        padding: 10
    },
    LoadingBox: {
        width: '100%',
        height: 'auto',
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})



export default TechScreen