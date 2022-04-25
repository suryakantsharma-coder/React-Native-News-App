import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Container from '../Styles/Container'
import Title from '../Styles/Title'


const FilterOptions = ({ data, setFilter, setState }) => {

    const renderItem = ({ item }) => {

        const onCountrySelected = () => {
            // alert(item.countryCode)
            setFilter(false)
            setState(item.countryCode)
        }

        return (
            <View style={{
                width: 100,
                margin: 4,
                padding: 6,
                width: 'auto',
                backgroundColor: '#F5F5F5',
                borderRadius: 20,
                // borderColor : 'black',
                // borderWidth : 1,
                elevation: 2
            }}
                onPress={onCountrySelected}
            >
                <Text style={{
                    color: 'black',
                    fontSize: 16
                }}
                    onPress={onCountrySelected}
                >{item.countryName}</Text>
            </View>

        )
    }

    return (
        <View style={styles.expnadSection}>
            {/* <Text style={{ color: 'black', fontSize : 18, paddingLeft : 14, fontWeight : 'normal' }}>
                By Country
            </Text> */}

            <FlatList
                style={{ paddingLeft: 10 }}
                data={data}
                renderItem={renderItem}
                horizontal={true}
            />
        </View>
    )
}


const HeaderWithFilter = ({ title, setState }) => {

    const Country = [
        {
            countryName: 'united States',
            countryCode: 'us'
        },
        {
            countryName: 'India',
            countryCode: 'in'
        },
        {
            countryName: 'Australia',
            countryCode: 'au'
        },
        {
            countryName: 'Singapore',
            countryCode: 'si'
        }]

    const [openFilter, setOpenFilter] = React.useState(false);

    const handleFilterOpen = () => {
        setOpenFilter(!openFilter)
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>{title || 'Header'}</Text>
                <Icons name='filter-alt' size={25} color={'white'} onPress={handleFilterOpen} />
            </View>


            {(openFilter) ? <FilterOptions data={Country} setState={setState} setFilter={setOpenFilter} /> : null
            }

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justofyContent: 'center',
        alignItems: 'center',
        ...Container.container
    },
    title: {
        width: '90%',
        ...Title.heading
    },
    expnadSection: {
        width: '100%',
        // backgroundColor: '#F5F5F5',
        marginBottom: 20,
        ...Container.container
    },
    fadingContainer: {
        padding: 0,
        // backgroundColor: "powderblue"
    },
})


export default HeaderWithFilter