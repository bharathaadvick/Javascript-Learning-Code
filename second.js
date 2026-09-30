let arr = [10, 20, 30, 40, 50];
let largest = arr[0];
let Secondlargest = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
        Secondlargest = arr[i];
    } else if(arr[i]>Secondlargest && largest!=Secondlargest){ 
        Secondlargest = arr[i];
}
}
console.log(Secondlargest);