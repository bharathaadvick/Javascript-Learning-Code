const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of subjects: ", (n) => {
    
    let marks = [];
    let i = 0;

    function getMark() {
        if (i < n) {

            rl.question(`Enter mark ${i + 1}: `, (mark) => {
                marks.push(Number(mark));
                i++;
                getMark();
            });

        } else {

            let total = 0;
            let highest = marks[0];
            let lowest = marks[0];

            for (let i = 0; i < marks.length; i++) {

                total += marks[i];

                if (marks[i] > highest) {
                    highest = marks[i];
                }

                if (marks[i] < lowest) {
                    lowest = marks[i];
                }
            }

            let average = total / marks.length;

            console.log("\nMarks:", marks);
            console.log("Total:", total);
            console.log("Highest:", highest);
            console.log("Lowest:", lowest);
            console.log("Average:", average);

            if (average >= 40) {
                console.log("Result: PASS");
            } else {
                console.log("Result: FAIL");
            }

            rl.close();
        }
    }

    getMark();
});