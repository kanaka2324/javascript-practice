// // print even number

// let arr=[1,2,3,4,5]
// arr.filter((i)=>{
//     if(i%2==0){
//         console.log(i);
//     }
// });


// // print odd number

// let arr1=[1,2,3,4,5]
// arr1.map((i)=>{
//     if(i%2!==0){
//         console.log(i);
//     }
// });


// // print even number

// function FindEven(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             console.log(arr[i]);
//         };
//     };
// };
// let arr=[1,2,3,4,5,6]
// FindEven(arr);



// print odd Number

// const Findodd=(arr)=>{
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             console.log(arr[i]);
//         };
//     };
// };
// const arr=[1,2,3,4,5,6,7];
// Findodd(arr);


// print prime Number
// function prime(num){
//     let count=0;
//     for(let i=1;i<=num;i++){
//        if(num%i==0){
//         count++;
//        }
//     };
//     if(count<=2){
//         return true;
//     };
//     return false;
// }; 
// let num=6;
// console.log(prime(num));


// print composite number
// function comp(num){
//     let count=0;
//     for(let i=1;i<=num;i++){
//        if(num%i==0){
//         count++;
//        }
//     };
//     if(count>=2){
//         return true;
//     };
//     return false;
// }; 
// num=1
// console.log(comp(num));

//prime number
// function isprime(num){
//     let count=0;
//     for(let i=1;i<=num;i++){
//         if(num%i===0){
//             count++;
//         }
//     }
//     if(count==2){
//         console.log(num+"is a prime number");
        
//     }
//     else{
//         console.log(num+"is not a prime number");
//     }
// }
// isprime(7);
// isprime(10);


// print fibonacci number


// function printfibonacci(n){
//     let a=0,b=1;
//     for(let i=0;i<=n;i++){
//         console.log(a);
//         let next=a+b;
//         a=b;
//         b=next;
//     }
// }
// printfibonacci(10);

// // print factorial
// function factorial(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// let number=5;
// console.log(`factorial of ${number} is ${factorial(number)}`);




// function A(){
//     function B(){
//         function c(){
//             console.log("C")
//         }
//         console.log("B")
//         c();
//     }
//     console.log("A");
//     B();
// }
// A();
