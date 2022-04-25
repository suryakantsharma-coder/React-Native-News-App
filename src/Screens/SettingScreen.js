import React from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import SettingOptionContainer from '../components/SettingCWS'
import Container from '../Styles/Container'
import Title from '../Styles/Title'

const SettingScreen = () => {
    return (
        <View style={{ height: '100%', ...Container.container }}>
            <Text style={Title.heading}>Settings</Text>

            <View style={styles.section}>
                <Text style={styles.heading}>Theme</Text>
                <SettingOptionContainer
                    title={'Auto Theme'}
                    description="Automatic get Current Theme According To you Device"
                    children={<Switch

                    />}
                    disabled={true}
                />
                <SettingOptionContainer
                    title={'Dark Theme'}
                    children={<Switch disabled />}
                    disabled={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        ...Container.container
    },
    heading: {
        width: '100%',
        padding : 4,
        fontSize : 18,
        ...Title.normal
    },
    section: {
        borderColor: 'gray',
        borderBottomWidth: .4,
        borderTopWidth: .4,
        marginTop : 10
    },
    subHeading: {
        width: '100%',
        fontSize : 12,
        ...Title.grayNoraml
    }
})

export default SettingScreen