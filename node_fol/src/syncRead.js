const fs=require('fs');

function read02() {  
    let data = fs.readFileSync(__dirname + "/data/cfg.json", "utf8");
    console.log(JSON.parse(data).PORT);
  }
  
  read02();
  console.log("===>>   Reading file #2....");