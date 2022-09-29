/////Creating object by using of object literals

let siva = {
    name: "siva",
    age: 29,
    place: "ANANTAPUR",
    aim: function () {
        return "siva is" + this.job
    }
}
console.log(siva);
/////siva.job = "Engineer";
siva["job"] = "Engineer"
console.log(siva);
console.log(siva.age);
console.log(siva);
console.log(siva.aim);
