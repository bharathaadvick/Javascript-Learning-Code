let arr = [10, 20, 30, 40, 50];
let average = 0;
for(let i=0; i<arr.length; i++){
    average += arr[i];
}
average /= arr.length;
console.log(average);