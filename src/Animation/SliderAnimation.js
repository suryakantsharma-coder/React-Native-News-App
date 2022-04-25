
import { getInputRangeFromIndexes } from 'react-native-snap-carousel';

export const scrollInterpolator = (index, carouselProps) => {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}

export const animatedStyles = (index, animatedValue, carouselProps) => {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
        zIndex: carouselProps.data.length - index,
        opacity: animatedValue.interpolate({
            inputRange: [2, 3],
            outputRange: [1, 0]
        }),
        transform: [{
            rotate: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2, 3],
                outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
                extrapolate: 'clamp'
            })
        }, {
            [translateProp]: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2, 3],
                outputRange: [
                    -sizeRef * 0.5,
                    0,
                    -sizeRef, // centered
                    -sizeRef * 2, // centered
                    -sizeRef * 3 // centered
                ],
                extrapolate: 'clamp'
            })
        }]
    };
}
