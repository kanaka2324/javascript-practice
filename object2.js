// 1] creating on object

// let user={
//     username:"john_doe",   //key:value pair
//     email:"john@example.com"
// };
// console.log(user);

//2] 2nd way

// let user=new Object();
// user.name="john",
// user.age=30,
// console.log(user);


//3] constuctor function
class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let p1= new user("kanaka",21);  // by using new keyword
console.log( p1);