const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var arr = [];
rl.question('Choose number for which you wanna find dividers ', (answer) => {

    findDeviders(answer);
    rl.close();

});

var findDeviders = function (answer) {
    var num = Number(answer);
    for (var i = 1; i <= num; i++) {
        if (num%i==0){
            arr.push(i);
            console.log(i);
        }
    }
    console.log(arr);
}