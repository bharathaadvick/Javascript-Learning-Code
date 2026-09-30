let arr = [10, 5, 25, 8, 2];
let largest = arr[0];
let smallest = arr[0];
for(let i=0; i<arr.length;i++){
    if(arr[i]>largest){
        largest = arr[i];
    }if(arr[i]<smallest){
        smallest = arr[i];
    }
}
console.log (largest);
console.log(smallest);