let str = "Madam";
let reverse = "";
for(let i=str.length-1; i>=0; i--){
    reverse += str[i];
}
console.log(reverse);
if(reverse === str){
    console.log("Its a Pallindrome")
}else{
    console.log("Its not a Palliindrome")
}