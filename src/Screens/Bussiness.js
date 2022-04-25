import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ListItem from '../ListType/ListItem'
import * as Progress from 'react-native-progress';
import HeaderWithFilter from '../components/HeaderWithFilter';
import Container from '../Styles/Container';

const BussinessScreen = ({ navigation }) => {

    const [array, setArray] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [selectedCountry, setSelectedCountry] = React.useState('in');

    React.useEffect(() => {
        getData();
    }, [selectedCountry])

    const renderOneByOne = ({ item }) => {
        console.log(item)
        return <ListItem
            title={item?.title}
            thumbnail={item?.urlToImage}
            source={item?.source.name}
            time={item?.publishedAt}
            onPress={() => {
                navigation.navigate('bussinessNews', item?.url)
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
        setArray([])
        fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=business&apiKey=94434489e8604f8687f679117b1b9523`)
            .then((response) => {
                return response.json();
            }).then((result) => {
                setArray(result.articles)
            })
    }

    return (
        <View style={{height : '100%', ...Container.container}}>

            <HeaderWithFilter title="Bussiness" setState={setSelectedCountry} />

            <FlatList
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
        height : '100%',
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justofyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: '90%',
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
    },
    expnadSection: {
        width: '100%',
        backgroundColor: '#F5F5F5'
    },
    filterButton: {
        color: 'white',
        backgroundColor: 'white',
        padding: 4,
        borderColor: 'black',
        borderRadius: 20
    }
})


export default BussinessScreen