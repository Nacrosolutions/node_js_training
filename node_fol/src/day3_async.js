async function f02() {
    let response = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let response2 = await response.json();
    console.log(response2);
  }
  
   f02();