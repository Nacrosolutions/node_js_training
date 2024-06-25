class MyColour {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
  }
  
  const allColours = [
    new MyColour('postboxred', '#E74C3C'),
    new MyColour('glaringpurple', '#9B59B6'),
    new MyColour('skyblue', '#5DADE2'),
    new MyColour('lightgreen', '#48C9B0'),
    new MyColour('goldenyellow', '#F4D03F'),
    new MyColour('lightgray', '#D7DBDD'),
  ];


  exports.getRandomColour = () => {
    return allColours[Math.floor(Math.random() * allColours.length)];
  }
  
  exports.allColours = allColours;