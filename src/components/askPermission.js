import React from 'react';
import { Platform, PermissionsAndroid } from 'react-native'

// const Options = {
//     enableHighAccuracy: true,
//     timeout: 15000,
//     maximumAge: 10000
// }

const Info = {
    title : '',
    message : ''
}

const askPermission = async (Info, PERMISSION, onGranted, onDeny, onNeverAskAgain) => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PERMISSION,
            Info
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            onGranted('granted')
        } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
            onDeny('deny')
        } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            onNeverAskAgain('never ask again')
        }
    }
}

const checkPermission = async (PERMISSION) => {
     const value = await PermissionsAndroid.check(PERMISSION)
     console.log(value);
    return value;
}

export { checkPermission, askPermission, Info}