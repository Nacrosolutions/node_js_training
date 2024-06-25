class Waiter {
    async wait() {
      return await Promise.resolve({ status:1});
    }
  }
  
const pObj = new Waiter()
    .wait()
    .then(console.log); 

console.log(pObj) 