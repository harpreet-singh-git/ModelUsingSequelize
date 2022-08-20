const counter = (num) => {
    if (num === undefined) {
        num = 0;
    }
    const getCounter = () => {
        console.log(num);
        return num
    }
    const nextCounter = () => {
        num = num + 1
        return num;
    }
    return [getCounter, nextCounter]
}
let num;
const [getNum, nextNum] = counter(num);
console.log(getNum());
nextNum()
getNum()
