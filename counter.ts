// const counter=0 : any;

const counter = (num) => {
    const getCounter = () => {
        console.log(num);
        return num
    }
    const nextCounter = () => {

        return num + 1;
    }
    return [getCounter, nextCounter]
}

const [getNum, nextNum] = counter(1);
getNum();
nextNum();

getNum();
