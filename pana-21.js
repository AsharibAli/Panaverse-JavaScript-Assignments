var legend = new Object({ "fullName": "Asharib Ali", "age": 18 }) //Bacha Nahi Ho Sir
console.log(legend);

function legend(obj) {
    this.name = obj.fullName
    this.age = obj.age
}

var legend_contructor = new legend({ fullName: "Asharib Ali", age: 18 }) //Bacha Nahi Ho Sir
console.log(legend);
