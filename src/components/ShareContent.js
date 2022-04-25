import { Share } from 'react-native';

const SharedContent = async (data) => {
    try {
        const shared = await Share.share({ message: data});
        if(shared.action === Share.sharedAction) {
            if(shared.activityType) {
                console.log('Shared in =>', shared.activityType)
            } else {
                alert('Sharing Failed...');
            } if (result.action === Share.dismissedAction) {
                alert('Sharing Failed...');
            }
        }
    } catch (err) {
        console.log(err);
    }
}

export const SharedBookmarkData = (title, url) => {
    return `title : ${title} \n url : ${url}`
}

export default SharedContent

