let str = "Hello World";
let reverse = "";
for(let i=str.length--;i>=0;i--){
    reverse += str[i];
}
    if(reverse === str){
        console.log("Its a Pallindrome");
    }
    else{
        console.log("Its Not a Pallindrome");
    }
