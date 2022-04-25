import {Alert} from 'react-native'



const AlertConfirm = (title, message, success, dismiss) => {
    Alert.alert(
        title,
        message,
        [
            {
                text : 'yes',
                onPress : () => success(),
                style : 'ok'
            },
            {
                text : 'no',
                onDismiss :() =>  dismiss(),
                style : 'cancel'
            }

        ]
    );
}

export default AlertConfirm