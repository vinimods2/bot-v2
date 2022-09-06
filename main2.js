const { 
          baileys, 
          delay, 
          generateForwardMessageContent, 
          prepareWAMessageMedia,
          generateWAMessageFromContent, 
          relayMessage,
          generateMessageID, 
          downloadContentFromMessage,
          BufferJSON, 
          WA_DEFAULT_EPHEMERAL,
          downloadHistory, 
          WAProto,
          proto, 
          getMessage, 
          generateWAMessageContent
     } = require("@adiwajshing/baileys")
const fs = require("fs")
const cheerio = require("cheerio")
const moment = require("moment-timezone")
const { exec, spawn } = require("child_process")
const axios = require('axios')
const fetch = require('node-fetch')
const util = require('util')
const google = require('google-it')
const ytsearch = require('yt-search')
const mimetype = require('mime-types')
const linkfy = require('linkifyjs');

const { youtube, facebook, quotes, igdl, igdl2, igstalk, igstory, tiktok, twitter, joox, covid, pin, pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime, listsurah, surah, tafsirsurah, film, manga, anime, character, drakor, otakudesu, ongoing, komiku, tebakgambar, sholat, lirik, chara, wattpad, playstore, linkwa, telesticker, stickersearch, webtoon, surah2, fbdown, twitter2, upload } = require("./lib/scrape")
const { kyun, clockString, fetchJson, fetchText, jsonformat, randomNomor, sleep, getBuffer, getGroupAdmins, getRandom } = require("./lib/funct")
const { color, bgcolor } = require("./lib/color")
const { isFiltered, addFilter } = require('./func/js/antispam.js');
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./func/js/addcmd.js');

const setting = JSON.parse(fs.readFileSync('./dono/settings.json'))
const pvzin = JSON.parse(fs.readFileSync('./dono/pvzin.json'))
const logoslink = JSON.parse(fs.readFileSync('./dono/logos.json'))

const antilink = JSON.parse(fs.readFileSync('./datab/ants/antilink.json'))
const antifake = JSON.parse(fs.readFileSync('./datab/ants/antifake.json'))
const antilinkhard = JSON.parse(fs.readFileSync('./datab/ants/antilinkhard.json'))
const autofigu = JSON.parse(fs.readFileSync('./datab/grupos/autofigu.json'))
const antilinkgp = JSON.parse(fs.readFileSync('./datab/ants/antilinkgp.json'))
const antiporn = JSON.parse(fs.readFileSync('./datab/ants/antiporn.json'))
const antiimg = JSON.parse(fs.readFileSync('./datab/ants/antiimg.json'))
const antisticker = JSON.parse(fs.readFileSync('./datab/ants/antisticker.json'))
const antinotas = JSON.parse(fs.readFileSync('./datab/ants/antinotas.json'))
const antictt = JSON.parse(fs.readFileSync('./datab/ants/antictt.json'))
const anticatalogo = JSON.parse(fs.readFileSync('./datab/ants/anticatalogo.json'))
const antidoc = JSON.parse(fs.readFileSync('./datab/ants/antidoc.json'))
const antiloc = JSON.parse(fs.readFileSync('./datab/ants/antiloc.json'))
const antipv = JSON.parse(fs.readFileSync('./datab/usuarios/antipv.json'))
const antivid = JSON.parse(fs.readFileSync('./datab/ants/antivideo.json'))
const antiaudio = JSON.parse(fs.readFileSync('./datab/ants/antiaudio.json'))
const palavra = JSON.parse(fs.readFileSync('./datab/grupos/palavras.json'))
const palavrao = JSON.parse(fs.readFileSync('./datab/grupos/palavrao.json'))
const antiflood = JSON.parse(fs.readFileSync('./datab/usuarios/antiflood.json'));
const adeuscara = JSON.parse(fs.readFileSync('./datab/grupos/adeuscara.json'));
const botoff = JSON.parse(fs.readFileSync('./datab/grupos/botoff.json'));
const welcome_group = JSON.parse(fs.readFileSync('./datab/grupos/welcomegp.json'));
const bye_group = JSON.parse(fs.readFileSync('./datab/grupos/byegp.json'));
const welcome_group2 = JSON.parse(fs.readFileSync('./datab/grupos/welcomegp2.json'));
const bye_group2 = JSON.parse(fs.readFileSync('./datab/grupos/byegp2.json'));
const voting = JSON.parse(fs.readFileSync('./func/funcoes/voting.json'));
const sotoy = JSON.parse(fs.readFileSync('./func/funcoes/sotoy.json'));
const countMessage = JSON.parse(fs.readFileSync('./datab/grupos/countmsg.json'));
const comandos = JSON.parse(fs.readFileSync('./dono/media/comandos.json'));
const welkom2 = JSON.parse(fs.readFileSync('./datab/usuarios/vacilo.json'));
const modobn = JSON.parse(fs.readFileSync('./datab/grupos/brincadeiras.json'))
const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'));
const welkom = JSON.parse(fs.readFileSync('./datab/grupos/welkom.json'));
const premium = JSON.parse(fs.readFileSync('./datab/usuarios/premium.json'));
const limitefll = JSON.parse(fs.readFileSync('./datab/usuarios/flood.json'));







const imgbot = fs.readFileSync('./media/bot.jpg')
const { logo } = logoslink
const { nomeBot, numerodono } = setting
const ownerNumber = [numerodono+"@s.whatsapp.net"]

module.exports = async(conn, msg, m) => {
	try {
		const from = msg.key.remoteJid
		const type = require('@adiwajshing/baileys').getContentType(msg.message);
        const content = JSON.stringify(msg.message)
        const chats = (type === 'conversation') ? msg.message.conversation : (type == 'imageMessage') ? msg.message.imageMessage.caption : (type == 'videoMessage') ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : ''
if(fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) { var prefixo2_on = JSON.parse(fs.readFileSync(`./func/prefixo/prefixo2_${from}.json`))
var prefix = prefixo2_on.prefixo } else {var prefix = setting.prefix }
        const command = chats.startsWith(prefix) ? chats.toLowerCase().split(' ')[0].slice(1) || '': '' //const command = chats.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
	    const args = chats.trim().split(/ +/).slice(1)
	    const budy2 = chats.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        const isGroup = msg.key.remoteJid.endsWith('@g.us')
        const isPrivate = msg.key.remoteJid.endsWith('@s.whatsapp.net')
        const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
        const senderNumber = sender.split("@")[0] 
        const pushname = msg.pushName
        const isCmd = chats.startsWith(prefix)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.m || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
        const q = args.join(' ')
        const body = chats.startsWith(prefix) ? chats : ''
        const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
        const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
	    const groupName = isGroup ? groupMetadata.subject : pushname
	    const groupId = isGroup ? groupMetadata.id : ''
	    const groupMembers = isGroup ? groupMetadata.participants : ''
	    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	    const isBotAdmins = groupAdmins.includes(botNumber) || false
	    const isGroupAdmins = groupAdmins.includes(sender) || false
	    const isAdmin = groupAdmins.includes(sender) || false
        const isOwner = ownerNumber.includes(sender) || false
        const times = moment(Date.now()).tz('America/sao_paulo').locale('id').format('HH:mm:ss')
        const time = moment(Date.now()).tz('America/sao_paulo').locale('id').format('DD/MM/YY HH:mm:ss')
        const date = moment(Date.now()).tz('America/sao_paulo').locale('id').format('DD/MM/YY')
        const more = String.fromCharCode(8206)
		const readmore = more.repeat(4001)
	    var budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''

        //antis

const isAntiCtt = isGroup ? antictt.includes(from) : false
const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false
const isAntiFlood = isGroup ? antiflood.includes(from) : false	
const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false
const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false
const isAntiPorn = isGroup ? antiporn.includes(from) : false
const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
const isAntiImg = isGroup ? antiimg.includes(from) : false
const isAntiSticker = isGroup ? antisticker.includes(from) : false
const isAntiNotas = isGroup ? antinotas.includes(from) : false
const Antidoc = isGroup ? antidoc.includes(from) : false
const Antiloc = isGroup ? antiloc.includes(from) : false
const isAntiVid = isGroup ? antivid.includes(from) : false	
const isPalavrao = isGroup ? palavrao.includes(from) : false	

const isWelkom2 = isGroup ? welkom2.includes(from) : true
const isVote = isGroup ? voting.includes(from) : false

//=========================================================================================//


        const reply = (teks) => {
        	return conn.sendMessage(from, { text: teks }, { quoted: msg })
        }
       
        const sendMess = (msg, teks, men, qwt) => {
             return conn.sendMessage(typeof msg == 'object'?msg.key.remoteJid: typeof msg == 'object'? msg.key.remoteJid: msg, { text: teks, mentions: men ? men : [] }, { quoted: qwt ? qwt : msg })
        }
        
       const isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}	


       
const getExtension = async (type) => { return await mimetype.extension(type)}
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer}

if(fs.existsSync(`./func/limitecaracteres/limite-c_${from}.json`)) { var limitecaracteres_on = JSON.parse(fs.readFileSync(`./func/limitecaracteres/limite-c_${from}.json`))
var limitefl = limitecaracteres_on.limite
} else { var limitefl = limitefll.limitefl}
       
///       
const sendBtext = async (id, text1, desc1, but = [], vr) => { buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1}
conn.sendMessage(id, buttonMessage, {quoted: vr})}

const reagir = async (idgp, emj) => { reactionMessage = {
react: {
text: emj, 
key: msg.key}} 
conn.sendMessage(idgp, reactionMessage)}

// ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => { buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4}
conn.sendMessage(id, buttonMessage, {quoted: vr})}

// ENVIAR MENU COM GIF OU QUALQUER DO TIPO
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => { buttonMessage = {
video: {url: gif1},
caption: text1,
gifPlayback: true, 
footerText: desc1,
buttons: but,
headerType: 4}
conn.sendMessage(id, buttonMessage, {quoted: vr}) }

// PRA ENVIAR BOTÃO DE TEMPLATE
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => { templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,}
conn.sendMessage(id, templateMessage, {quoted: vr})}

const sendlistA = async (id, txt1, txt2, title1, btext, but) => { listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections: but}
conn.sendMessage(id, listMessage)  }


var blalogoofc = getBuffer(logo)
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${nomeBot}`, 'jpegThumbnail': blalogoofc}}}

////pvzin


if(!isGroup && !msg.key.fromMe && ['opa', 'bom dia', 'boa tarde', 'boa noite', 'oi', 'ola', 'minerd'].indexOf(budy.toLowerCase()) != -1){ 
conn.sendBT(from, `Olá seja muito bem vindo sou Skynerd e vou atender você agora. Leia os termos nos links abaixo antes de comprar e esteja ciente dos mesmo\n
Termo de compra* - https://paste.anasor.com/paste.php?raw&id=18756\n*termo de uso* - https://paste.anasor.com/paste.php?raw&id=18755\nAgora click no botão desejado.\n\n*NÃO MANDE ÁUDIO, DIGITE OK*?`, 
"",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'SOBRE A INTERNET', id: `${prefix}net`}},    
{index: 2, quickReplyButton: {displayText: 'SOBRE A IPTV', id: `${prefix}iptv`}},  
{index: 3, quickReplyButton: {displayText: 'TESTE SSH GRATIS', id:`${prefix}sshgratis`}}
], selo)
}else if(!isCmd && !isGroup && !msg.key.fromMe){
if(pvzin.length < 1||!pvzin.map(i => i.id).includes(sender)){
if(pvzin.length < 1||pvzin.map(i => i.id).indexOf(sender) < 0){
conn.sendBT(from, `Olá seja muito bem vindo sou Skynerd e vou atender você agora. Leia os termos nos links abaixo antes de comprar e esteja ciente dos mesmo\n
Termo de compra* - https://paste.anasor.com/paste.php?raw&id=18756\n*termo de uso* - https://paste.anasor.com/paste.php?raw&id=18755\nAgora click no botão desejado.\n\n*NÃO MANDE ÁUDIO, DIGITE OK*?`, 
"",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'SOBRE A INTERNET', id: `${prefix}net`}},    
{index: 2, quickReplyButton: {displayText: 'SOBRE A IPTV', id: `${prefix}iptv`}},  
{index: 3, quickReplyButton: {displayText: 'TESTE SSH GRATIS', id:`${prefix}sshgratis`}}], selo)
pvzin.push({id:sender, date:date})
fs.writeFileSync('./dono/pvzin.json', JSON.stringify(pvzin))
}else if(pvzin[pvzin.map(i => i.id).indexOf(sender)].date != date){
conn.sendBT(from, `Olá seja muito bem vindo sou Skynerd e vou atender você agora. Leia os termos nos links abaixo antes de comprar e esteja ciente dos mesmo\n
Termo de compra* - https://paste.anasor.com/paste.php?raw&id=18756\n*termo de uso* - https://paste.anasor.com/paste.php?raw&id=18755\nAgora click no botão desejado.\n\n*NÃO MANDE ÁUDIO, DIGITE OK*?`, 
"",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'SOBRE A INTERNET', id: `${prefix}net`}},    
{index: 2, quickReplyButton: {displayText: 'SOBRE A IPTV', id: `${prefix}iptv`}},  
{index: 3, quickReplyButton: {displayText: 'TESTE SSH GRATIS', id:`${prefix}sshgratis`}}], selo)

pvzin.push({id:sender, date:date})
fs.writeFileSync('./dono/pvzin.json', JSON.stringify(pvzin))
}}}



//=================================\\

async function AntilinkHardF() {
if(isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins && !isCmd && !msg.key.fromMe) {
linkgpp = await conn.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(budy2.includes(`${linkgpp}`)) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(budy2) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !msg.key.fromMe) {
linkgpp = await conn.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
reply('*Link detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')}} 
AntilinkHardF()

if(isUrl(body) && isAntilinkgp && !isCmd && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')}}

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
const numbersIds = countMessage.map(i => i.groupId)
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')}


//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\

///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
if(msg.key.fromMe) return 
const ff = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff)}

if (isAntiLinkHard && isUrl(budy) && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM] - LINK', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${budy}`), 'DE:', color(pushname))
if(msg.key.fromMe) return 
return }

if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
if(msg.key.fromMe) return 
const ff1 = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff1)}


//////BLOCK CMD///////
//(CREDITOS KAUAN)\\
if(isGroup){ const checar = getComandos(from); if(checar === undefined) addComandosId(from)}
if(isGroup && isCmd && !isOwner  && getComandoBlock(from).includes(command))return reply('comando blockeado')

 
if(fs.existsSync(`./func/fgp-${from}.json`)) {
async function fgptotale() {
if(isGroup && fs.existsSync(`./func/fgp-${from}.json`)) {
var json_fgp = JSON.parse(fs.readFileSync(`./func/fgp-${from}.json`))
var hora_d_agr = moment.tz('America/Sao_Paulo').format('HH/mm/ss'); 
switch(hora_d_agr){
case json_fgp.abrirgp: {
await conn.groupSettingUpdate(from, 'not_announcement')
var blamsgfgp = `./func/horario-grupo-a-b/mensagem_de_abrir-fechar-${from}.json`
fs.writeFileSync(blamsgfgp, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\nFECHAR / ABRIR GRUPO\n\n_- REALIZANDO AÇÃO _-", null, 2))
if(fs.existsSync(blamsgfgp)) { 
blarmsgfc = JSON.parse(fs.readFileSync(blamsgfgp))
}
await conn.sendMessage(from, {text: blarmsgfc})
fs.unlinkSync(blamsgfgp)
}
break

case json_fgp.fechargp: {
await conn.groupSettingUpdate(from, 'announcement')
var blamsgfgp = `./func/horario-grupo-a-b/mensagem_de_abrir-fechar-${from}.json`  
fs.writeFileSync(blamsgfgp, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\nFECHAR / ABRIR GRUPO\n\n_- REALIZANDO AÇÃO _-", null, 2))
if(fs.existsSync(blamsgfgp)) { blarmsgfc = JSON.parse(fs.readFileSync(blamsgfgp))}
await conn.sendMessage(from, {text: blarmsgfc})
fs.unlinkSync(blamsgfgp)
}
break
default:
}}}}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
if(isGroup && fs.existsSync(`./func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.includes(`@${nmrdnofc1}`)) {
const tabelin = JSON.parse(fs.readFileSync(`./func/afk/afk-@${nmrdnofc1}.json`));  
txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`
conn.sendMessage(from, {text: txt}, {quoted: msg})
}}
 
if(isGroup && fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {
const sairalg = JSON.parse(fs.readFileSync(`./func/sairgp/sairgp-${from}.json`)); 
datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
if(datinhaofc == sairalg.Data_de_sair) {
group = await conn.groupMetadata(from)
member = group['participants']
mem = []
member.map(async adm => { mem.push(adm.id.replace('c.us', 's.whatsapp.net')) })
options = { text: `Atenção membros, aqui quem está falando é o bot com a mensagem automática, sairei do grupo por o tempo que foi realizado no dia que alugou, completou 30 dias....`,
mentions: mem, quoted: msg}
conn.sendMessage(from, options)
exec(`cd func && cd sairgp && rm sairgp-${from}.json`)
setTimeout(async() => {
reply(`${prefix}sairgp`)
}, 5000)}}

var blaaviso_ndms = `./func/avisos/aviso_${from}.json`
if(fs.existsSync(blaaviso_ndms)) {
async function avsofcbt() {
hora100 = moment.tz('America/Sao_Paulo').format('HH/mm/ss');
var avisos_gps = JSON.parse(fs.readFileSync(blaaviso_ndms))
if(hora100 === avisos_gps.hora) {
conn.sendMessage(from, {text: `${prefix}hidetag ${avisos_gps.texto}`})}}
myinterval = setInterval(avsofcbt, 1000)
await setTimeout(async () => {
clearInterval(myinterval);
}, 1000)}

        
//===(CRÉDITOS : ALEATORY CONTEÚDOS)==\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: msg})
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: msg})
await conn.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: msg})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: msg})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if (isAntiFlood && budy.length >= limitefl && !isOwner && isBotGroupAdmins && !isGroupAdmins && !msg.key.fromMe) { 
setTimeout( () => {
return reply('Muitas Caracteres enviadas, isto é contra as normas do grupo, por precaução, eu irei remover.')
console.log(color('Deram Spam de caracteres..','red'))
}, 100)
setTimeout(async () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}


//=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrao && isBotGroupAdmins) { //CREDITOS TIAGO
 if (palavra.includes(budy2)) {
 if (!isGroupAdmins) {
 conn.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : msg})       
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
conn.sendMessage(from, {text: `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`}, {quoted : msg}).catch(e => {
conn.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted : msg})
})       							
}, 0)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}


            } catch (e) {
               console.log(color(e, 'red'))
            }
        }
        
 let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update '${__filename}'`)
	delete require.cache[file]
	require(file)
})
