setTimeout(function() {
    console.log("Task 3");    			
 }, 0);
process.nextTick(function () {
    
    while(true){
       console.log(' executed? ');
   }
});

console.log("Executing nth tick");



console.log("Executing 1 tick");
console.log("Executing 2 tick");

