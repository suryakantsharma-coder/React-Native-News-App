import { setHistory } from "./asyncStorage";

const addHistory = (data, value) => {
    try {
        const arr = data
        arr.push(value)
        console.log(arr)
        if(arr.length > 10) {
            arr.shift(0,1);
        }
        setHistory(arr);
    } catch (err) {
        console.log(err)
    }
}

export {addHistory}