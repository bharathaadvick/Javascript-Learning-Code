let mark = [70, 80, 55, 79, 76];
let total = 0;
let highestmark =mark[0];
let lowestmark = mark[0];
for(let i=0; i<mark.length; i++){
           total += mark[i];
           if(mark[i] > highestmark){
                highestmark = mark[i];
           }
           if(mark [i]< lowestmark){
                lowestmark= mark[i];
           }
}
let average = total / mark.length;
console.log(total);
console.log(average);
console.log(highestmark);
console.log(lowestmark);
      if(average>50){
        console.log("Result Pass");
      }
      else{
        console.log("Result Fail");
          }