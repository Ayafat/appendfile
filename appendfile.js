var fs = require('fs');

fs.appendFile('mynew.txt',''+''+'i like blue', function (err) {
    if (err) throw err;
    console.log('Saved!');
});