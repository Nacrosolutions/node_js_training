
const myPromise = new Promise(function(myResolve, myReject) { // Invoking a constructor
    setTimeout(function() { 
      console.log("helo")
      myReject({err: "data received"}); }, 1000);
  });
  
  myPromise.then(function(value) {
     console.log(value); 
  })
  .catch(e=>{})