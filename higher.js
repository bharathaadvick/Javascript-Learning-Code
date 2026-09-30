let arr = [10, 20, 30, 40, 50];
let smallest = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] < smallest){
        smallest=arr[i];
    }
}
console.log(smallest);