//// creating object by using of new key word and function constructer 

function user(n, a, j, c) {
    this.name = n;
    this.age = a;
    this.job = j;
    this.city = c;
}
let user1 = new user("chinnu", "28", "Engineer", "Hyderabad")
console.log(user1);
user1.momName = "Govindamma";
console.log(user1);

