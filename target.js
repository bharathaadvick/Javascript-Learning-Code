let arr = [2, 7, 11, 15];
let total = "";
let target = 9;
for(let i=0; i<arr.length; i++){
    total += arr[i];
    if(total===target){
        console.log(arr[i]);
    }else{
        console.log("No")
    }
}