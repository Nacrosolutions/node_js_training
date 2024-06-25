class InMemoryFriends {
    constructor() {
        this.list = [];
    }
 
    add(name) {
        this.list.push(name);
    }
 
    getAll() {
        return this.list;
    }
 }

 const friendsList = new InMemoryFriends();

 module.exports = friendsList;