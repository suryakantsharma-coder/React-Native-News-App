import React from 'react'
import { View, Dimensions, Text } from 'react-native'
import Pie from 'react-native-progress/Circle'

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const WebProgress = ({progress}) => {
    return (
        <View style={{
            width: ScreenWidth,
            height: ScreenHeight,
            paddingTop: ScreenHeight / 3,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
            position: 'absolute',
            zIndex: 1,
        }}>

            <View style={{
                width: 100,
                height: 100,
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}>
                <View>
                    <View style={{flexDirection : 'row', justifyContent : 'center'}}>
                        <Pie style={{
                            marginTop: 30
                        }} progress={progress} width={null} />
                    </View>
                    <Text style={{ color: 'black', textAlign : 'center' }}>{parseInt(progress * 100)}%</Text>
                </View>
            </View>
        </View>
    )
}

export default WebProgress