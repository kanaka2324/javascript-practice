let arr=[1,1,2,2,3,3];
let newarr=[];
newarr[0]=arr[0];
n=arr.length;
let index=1;
for(let i=1;i<n;i++){
    let prev=arr[i-1];
    let cur=arr[i];
    if(prev!==cur){
    newarr[index++]=cur;
}
}
console.log(newarr);



