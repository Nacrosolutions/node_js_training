
navigator.getBattery().then(function(value){
    console.log("Battery Level: " + (value.level * 100));
  }, function(reason){
    console.log("Error: " + reason);
  });