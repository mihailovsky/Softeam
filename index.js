var fs = require('fs');

var myFile = fs.readFileSync('INPUT.txt', 'utf8');


var counter = 0;
var generalAmount =0;
var maxCounter =0;
for (var i =0; i<myFile.length&& i<100; i++){
    if(myFile[i]==1){
        counter++;
        generalAmount++;
        if (counter>maxCounter){
            maxCounter=counter;
        }
    }else {
        generalAmount++;
        counter =0;
    }
}
console.log(generalAmount);
console.log(maxCounter);
var message = "The most ones - " + maxCounter+"";

fs.writeFileSync('OUTPUT.txt', message);