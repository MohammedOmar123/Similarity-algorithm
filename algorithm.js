let arr = ["ant","ant","bee"]; 
let arr2 = ["dog","dog","dog","dog","hog","ant","bee"]; 
for (let index = arr.length-1; index>=0; index--) {
for (let i = index-1; i >=0; i--) {
   if(arr[index]==arr[i]){
       arr.splice(index,1); 
   }  
}}
for (let index = arr2.length-1; index>=0; index--) {
    for (let i = index-1; i >=0; i--) {
       if(arr2[index]==arr2[i]){
           arr2.splice(index,1); 
       }  
    }
}

let count = 0 ; 
for(let i  = 0  ; i  <arr.length ; i++){
    for(let j = 0 ; j <arr2.length ; j++){
        if(arr[i]==arr2[j]){
            count++; 
        }
    }
}
console.log (count/(Math.sqrt(arr.length)*(Math.sqrt(arr2.length)))); 
