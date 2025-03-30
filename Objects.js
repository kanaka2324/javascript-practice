// Object is a collection of key-value pairs where keys are strings(or symbols)

// creating an object
const person={
      FirstName:"kanaka",
      lastName:"D.H",
      age:20,
      fullName:function(){
        return this.FirstName +" "+ this.lastName;
      }
    };
    //Accesing object properties
    console.log(person.FirstName);
    console.log(person.age)
    console.log(person.fullName());