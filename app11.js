const sandwich = {
    bread: "honey_oat",
    veg: "carrot_vada",
    cheese: "amul",
    toppings: ["lettuce", "tomato", "mustard"]
  };
  
  let { bread, veg } = sandwich;
  console.log("after destruct: ", bread, veg);
  
  bread = "garlic"


  let { toppings } = sandwich;
toppings[0] = "corn";

console.log(sandwich)



// const a = {x: 1, y: 4}
// a.y = 77;

// console.log("A",a)


let  a2 = 10, b2 = 20;

[a2,b2]=[b2,a2];

console.log(a2,b2)