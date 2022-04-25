import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Title from '../Styles/Title'
import Container from '../Styles/Container'

const SettingOptionContainer = ({ title, description ,children, disabled}) => {
    
    return (
        <View>
            {(disabled) ?
                <View style={styles.container} >
                    <View style={{ width: '70%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.heading}>{title}</Text>
                        <Text style={styles.subHeading}>{description || ''}</Text>
                    </View>
                    <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                        {children}
                    </View>
                </View>
                :
                <View style={{opacity : .2}}>
                    <View style={styles.container} >
                        <View style={{ width: '70%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.heading}>{title}</Text>
                        </View>
                        <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                            {children}
                        </View>
                    </View>
                </View>}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        marginTop : 6,
        flexDirection: 'row',
        justifyContent: 'center',
        ...Container.container
    },
    heading: {
        width: '100%',
        fontSize : 18,
        ...Title.normal
    },
    subHeading: {
        width: '100%',
        fontSize : 12,
        ...Title.grayNoraml
    }
})

export default SettingOptionContainer
