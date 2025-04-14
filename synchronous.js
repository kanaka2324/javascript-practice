// synchronous 


console.log("task1");
function greet(){
console.log("task2");
}
greet();
console.log("task3");




// // asynchronous
// console.log("task1");
// setTimeout(( )=>{console.log("task2");
// },2000)
// console.log("task3");


// to handle this asynchonous code
// we Use
// 1] ASYNC/await
// 2] PROMISES

// let promises=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Task 3");
//     },2000);
//     });
// async function fetchdata() {
//     try{
//         console.log("Task1");
//         console.log("Task2")

//         const data=await promises;
//         console.log(data);
//         console.log("Task 4")
//     }catch(error){
//         console.error("error:",error);
//     }
    
// }
// fetchdata();


