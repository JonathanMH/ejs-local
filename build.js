var fs = require('fs');
var ejs = require('ejs');

var templateFile = 'test.ejs';
var data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

var str = fs.readFileSync(templateFile, 'utf-8');

var output = ejs.render(str, data, {});

console.log(output);
fs.writeFileSync('done.html', output, 'utf8');
