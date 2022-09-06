fs = require('fs')

bala = fs.readFileSync('./main.js').toString().split('\n')
vc = ''
for(v of bala){
if(v.includes("case ")){vc += '\n${prefix}'+`${v.split("'")[1]}`}
}
fs.writeFileSync('./comandos2.json', vc)