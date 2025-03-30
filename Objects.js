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


    

    // creating an object
    const car={
        brand:"Royal Enfield",
        model:"350cc",
        year:2023,

        //method to display car details
        getDetails:function(){
            return this.brand +" "+ this.year;
            
        }
    };
    //accesing object properties
    console.log(car.brand);
    console.log(car.model);
    console.log(car.getDetails());