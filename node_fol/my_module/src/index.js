const  mymodule = require('./my_mod');

const currencyI=require('./currency')
console.log('index_file: ', mymodule()) ;


console.log("USD 100 equals to INR:", currencyI.usdToInr(100) );
console.log("INR 100 equals to USD:", currencyI.inrToUsd(100) );
