// 🔹 1. Object Creation
const person = {
    name: "Alice",
    age: 31,
    isStudent: false,
    greet: function () {
      console.log(`Hi, I'm ${this.name}`);
    }
  };
  
//   // 🔹 2. Accessing Properties
//   console.log(person.name);       // Dot notation
//   console.log(person["age"]);     // Bracket notation
  
//   // 🔹 3. Updating Properties
//   person.age = 32;
//   console.log(person.age);
  

//   // 🔹 4. Adding New Property
//   person.city = "New York";
//   console.log(person.city);
  
//   // 🔹 5. Deleting Property
//   delete person.isStudent;
//   console.log(person);
  
//   // 🔹 6. Checking Property Existence
//   console.log("name" in person);              // true
//   console.log(person.hasOwnProperty("age"));  // true
  
//   // 🔹 7. Object Methods
//   person.greet();  // Hi, I'm Alice
  
//   // 🔹 8. Looping Over Properties
//   for (let key in person) {
//     console.log(key, person[key]);
//   }
  
//   // 🔹 9. Object.keys() / values / entries
//   console.log(Object.keys(person));    // [ 'name', 'age', 'greet', 'city' ]
//   console.log(Object.values(person));  // [ 'Alice', 32, [Function: greet], 'New York' ]
//   console.log(Object.entries(person)); // [ [ 'name', 'Alice' ], ... ]
  
//   // 🔹 10. Object.assign() – Merge Objects
//   const extra = { hobby: "Reading", age: 40 };
//   const merged = Object.assign({}, person, extra);
//   console.log(merged);
  
//   // 🔹 11. Spread Operator – Clone / Merge
//   const copy = { ...person };
//   console.log(copy);
  
//   // 🔹 12. Object.freeze() – Lock the object
//   const locked = Object.freeze({ a: 1 });
//   locked.a = 2;
//   console.log(locked.a); // 1
  
//   // 🔹 13. Object.seal() – Prevent adding/removing, but allow modify
//   const sealed = Object.seal({ b: 10 });
//   sealed.b = 20;
//   sealed.c = 30;     // Won't be added
//   delete sealed.b;   // Won't be deleted
//   console.log(sealed); // { b: 20 }
  
//   // 🔹 14. Object.defineProperty()
//   const user = {};
//   Object.defineProperty(user, "id", {
//     value: 101,
//     writable: false,
//     enumerable: true
//   });
//   console.log(user.id); // 101
//   user.id = 999;
//   console.log(user.id); // still 101
  
//   // 🔹 15. Object.getOwnPropertyNames()
//   console.log(Object.getOwnPropertyNames(user)); // ['id']