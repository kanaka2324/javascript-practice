let person={
    Name:"sonu",
    age:24,
    address:{
        street:"123 main st",
        city:"banglore",
        zip:"10001"
    },
    contact:{
        email:"sonu2324@gmail.com",
        phone:"1234567889"
    }
};
//ACCESSING SUB-OBJECT
console.log(person.address.city);  //USING DOT NOTATION:
console.log(person.contact.email);
console.log(person["address"]["zip"]);//USING BRACKET NOTATION


// let person1={
//     Name:"sonu",
//     age:24,
//     address:{
//         street:"123 main st",
//         city:"banglore",
//         zip:"10001"
//     },
//     contact:{
//         email:"sonu2324@gmail.com",
//         phone:"1234567889"
//     }
// };
// //modifying a sub-objects
// person1.address.city="hyderbad";//UPDATING VALUES
// console.log(person1.address.city);

// person1.contact.linkedin="alice-linkedin";//ADDING NEW PROPERTIES
// console.log(person1.contact.linkedin);

// delete person1.address.zip;//DELETING PROPERTIES
// console.log(person1.address.zip);


// // LOOPING THROUGH A SUB-OBJECT
// let person2={
//     Name:"sonu",
//     age:24,
//     address:{
//         street:"123 main st",
//         city:"banglore",
//         zip:"10001"
//     },
//     contact:{
//         email:"sonu2324@gmail.com",
//         phone:"1234567889"
//     }
// };
// for(let key in person2.address){
//     console.log(key+" "+person2.address[key]);
// }




// // object--->for loop we use in

// const obj={
//     name:"kanaka",
//     age:20,
//     marks:50,
// }
// for(let data in obj){
//     console.log(data+":"+obj[data]);
// }



// const obj1={
//     name:"kanaka",
//     age:20,
//     marks:50,
// }
// console.log(obj1.name+" "+obj1.age+" "+obj1.marks);


