const fs = require('fs')
const { delay } = require('@adiwajshing/baileys');
const encodeUrl = require('encodeurl');
const axios = require('axios')
const chalk = require('chalk');
const colors = require("colors")
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
const moment = require("moment-timezone")
const time = moment(Date.now()).tz('America/sao_paulo').locale('id').format('DD/MM/YY HH:mm:ss')
const { kyun, clockString, fetchJson, fetchText, jsonformat, randomNomor, sleep, getBuffer, getGroupAdmins, getRandom } = require("./lib/funct")

const { prefix } = JSON.parse(fs.readFileSync('./dono/settings.json'))


const welkom2 = JSON.parse(fs.readFileSync('./datab/usuarios/vacilo.json'));
const welkom = JSON.parse(fs.readFileSync('./datab/grupos/welkom.json'));
const antifake = JSON.parse(fs.readFileSync('./datab/ants/antifake.json'))
const adeuscara = JSON.parse(fs.readFileSync('./datab/grupos/adeuscara.json'));
const welcome_group = JSON.parse(fs.readFileSync('./datab/grupos/welcomegp.json'));
const bye_group = JSON.parse(fs.readFileSync('./datab/grupos/byegp.json'));
const welcome_group2 = JSON.parse(fs.readFileSync('./datab/grupos/welcomegp2.json'));
const bye_group2 = JSON.parse(fs.readFileSync('./datab/grupos/byegp2.json'));
const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'));
fundo1 = nescessario.fundo1
fundo2 = nescessario.fundo2


module.exports = configWelcome = async (conn, sky) => {
if(sky.participants[0].startsWith(conn.user.id.split(':')[0])) return 
const grpmdt = await conn.groupMetadata(sky.id)

const isGroup2 = grpmdt.id.endsWith('@g.us') 

const GroupMetadata_ = isGroup2 ? await conn.groupMetadata(sky.id): ""
const mdata_ = isGroup2 ? await conn.groupMetadata(sky.id): ""

// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(sky)
if(dbackid.indexOf(sky.id) >= 0) {
if (sky.action == 'add'){ 
num = sky.participants[0]
var ind = dbackid.indexOf(sky.id)
if(adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await conn.sendMessage(mdata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
conn.groupParticipantsUpdate(mdata_.id, [sky.participants[0]], 'remove')
return
}
}
}

// FIM LISTANEGRA CONST ^


// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 

if(antifake.includes(sky.id)) {
if (sky.action === 'add' && !sky.participants[0].startsWith(55)){
num = sky.participants[0]
conn.sendMessage(mdata_.id, {text: ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️'})
setTimeout(async() => {
conn.groupParticipantsUpdate(mdata_.id, [sky.participants[0]], 'remove')
}, 1000)
}
}

// FIM ANTIFAKE ^

// BEM VINDO COMPLETO 


if(welkom.includes(sky.id)) {
if(antifake.includes(sky.id) && !sky.participants[0].startsWith(55)) return
try {
  
// PEGAR DESCRIÇÃO DO GRUPO. 

const groupDesc = await GroupMetadata_.desc  
  
try {
ppimg = await conn.profilePictureUrl(sky.participants[0])
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

try {
ppgp = await conn.profilePictureUrl(mdata_.id)
} catch {
ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgp}`)

const groupIdWelcomed = []
const groupIdBye = []
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)
for(let obj of bye_group) groupIdBye.push(obj.id)


const isByed = groupIdBye.indexOf(sky.id) >= 0 ? true : false

const isWelcomed = (groupIdWelcomed.indexOf(sky.id) >= 0) ? true : false

if(sky.action === 'add') {
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(sky.id)
teks = welcome_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_.subject)
.replace('#numerodele#', '@'+sky.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(sky.participants[0].split('@')[0], mdata_.subject)
}
let buff = await getBuffer(ppimg)
conn.sendMessage(mdata_.id, {image: {url:`https://kauan-le.herokuapp.com/api/welcome?titulo=${encodeUrl('BEM VINDO')}&nome=${sky.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO ${encodeUrl(mdata_.subject)}`}
, caption: teks, 
mentions: sky.participants})
} else if(sky.action === 'remove') {
mem = sky.participants[0]

try {
ppimg = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

if(isByed) {
var ind = groupIdBye.indexOf(sky.id)
teks = bye_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_.subject)
.replace('#numerodele#', sky.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(sky.participants[0].split('@')[0])
}

conn.sendMessage(mdata_.id, {image: {url:`https://kauan-le.herokuapp.com/api/welcome?titulo=Adeus&nome=${sky.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=SAIU DE ${encodeUrl(mdata_.subject)}`}, caption: teks, 
mentions: sky.participants})
}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color(
`Mensagem de saiu do bem vindo não definida, mas não precisa definir,
qualquer dúvida dúvida digita :
${prefix}infobemvindo no WhatsApp..`, "yellow"))
} else if(String(e).includes("welcome is not defined")) {
console.log(color(
`Mensagem do bem vindo não definida, qualquer dúvida digite : 
${prefix}infobemvindo no WhatsApp..`, "red"))
} else {
console.log(e);
}
}
}
  
if(sky.participants[0].startsWith(conn.user.id.split(':')[0])) return 
if(welkom2.includes(sky.id)) {
if(antifake.includes(sky.id) && !sky.participants[0].startsWith(55)) return
try {

const GroupMetadata_2 = isGroup2 ? await conn.groupMetadata(sky.id): ""
  
const mdata_2 = isGroup2 ? await conn.groupMetadata(sky.id): ""

// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await GroupMetadata_2.desc

const groupIdWelcomed2 = []
const groupIdBye2 = []
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)
for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isByed2 = groupIdBye2.indexOf(sky.id) >= 0 ? true : false

const isWelcomed2 = (groupIdWelcomed2.indexOf(sky.id) >= 0) ? true : false

if(sky.action === 'add') {
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(sky.id)
teks = welcome_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+sky.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(sky.participants[0].split('@')[0], mdata_2.subject)
}

conn.sendMessage(mdata_2.id, {text: teks, mentions: sky.participants})

} else if(sky.action === 'remove') {
mem = sky.participants[0]

if(isByed2) {
var ind = groupIdBye2.indexOf(sky.id)
teks = bye_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', sky.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(sky.participants[0].split('@')[0])
}

conn.sendMessage(mdata_2.id, {text: teks, mentions: sky.participants})
}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color(
`Mensagem de saiu do bem vindo não definida, mas
não precisa definir, qualquer dúvida digita :
${prefix}infobemvindo no WhatsApp..`, "yellow"))
} else if(String(e).includes("welcome is not defined")) {
console.log(color(
`Mensagem do bem vindo não definida, qualquer dúvida digite :
${prefix}infobemvindo no WhatsApp..`, "red"))
} else {
console.log(e);
}
}
}
}



let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update '${__filename}'`)
	delete require.cache[file]
	require(file)
})