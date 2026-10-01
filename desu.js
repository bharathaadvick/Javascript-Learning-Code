const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findLargest(a, b, c) {
    // Write your logic here
}

rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {
        rl.question("Enter third number: ", (c) => {

            // Call the function here
        

            rl.close();
        });
    });
});