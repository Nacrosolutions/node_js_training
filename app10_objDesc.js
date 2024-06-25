
const myBoxA = {
    heightA: 12,
    widthA: 14,
    metaData: [{"unit": "inch"}, {"price": 1000, "currency" : "INR"}]
};

let { heightA , widthA } = myBoxA;
console.log(heightA, widthA );


//? approah 1
// let {metaData}=myBoxA;
// let [,{currency}]=metaData;

// console.log(currency)

//? approah 2
let { currency } = myBoxA.metaData[1];
console.log(currency);