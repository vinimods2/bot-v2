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
const yts= require('yt-search')
const mimetype = require('mime-types')
const linkfy = require('linkifyjs');
const encodeUrl = require('encodeurl');


const { youtube, facebook, quotes, igdl, igdl2, igstalk, igstory, tiktok, twitter, joox, covid, pin, pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime, listsurah, surah, tafsirsurah, film, manga, anime, character, drakor, otakudesu, ongoing, komiku, tebakgambar, sholat, lirik, chara, wattpad, playstore, linkwa, telesticker, stickersearch, webtoon, surah2, fbdown, twitter2 } = require("./lib/scrape")
const { kyun, clockString, fetchJson, fetchText, jsonformat, randomNomor, sleep, getBuffer, getGroupAdmins, getRandom } = require("./lib/funct")
const { color, bgcolor } = require("./lib/color")
const { isFiltered, addFilter } = require('./func/js/antispam.js');
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./func/js/addcmd.js');
const { upload, nit } = require('./func/funcoes/tourl');

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



// JS DE MENUS / INFORMAÇÕES DE UTILIZAR \

const { menu } = require('./menus/menu.js');
const { menudono } = require('./menus/dono.js');
const { adms } = require('./menus/adms.js');
const { menulogos } = require('./menus/menulogos.js');
const { menuprem } = require('./menus/menuprem.js');
const { efeitos } = require('./menus/efeitos.js');
const { infovotacao } = require('./func/js/infovotacao.js');
const { infocontador } = require('./func/js/infocontador.js');
const { infobemvindo } = require('./func/js/infobv.js');
const { infolistanegra } = require('./func/js/infolistanegra.js');
const { infopalavrao } = require('./func/js/infopalavrao.js');
const { infobancarac } = require('./func/js/infobancarac.js');
const { infodono } = require('./menus/infodono.js');
const { gitdobot } = require('./dono/gitdobot.js');
const { alteradores } = require('./menus/alteradores.js');
const { configbot } = require('./menus/configurar.js');
const { hospedar } = require('./menus/hospedar.js');
const { cmd_termux } = require('./menus/comandos-termux.js');
const { destrava, destrava2 } = require('./func/funcoes/destrava.js');
const { tabela } = require('./func/js/tabela');
const { conselhob } = require('./func/js/conselhob.js');
const { palavras } = require('./func/js/conselhos.js');




const imgbot = fs.readFileSync('./media/bot.jpg')
const { logo } = logoslink

const { nomeBot, numerodono, keykauan } = setting
const ownerNumber = [numerodono+"@s.whatsapp.net"]
NomeDoBot = nomeBot



module.exports = async(conn, msg, m) => {
	try {
	    const info = msg
		const from = msg.key.remoteJid

if(fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) {
var prefixo2_on = JSON.parse(fs.readFileSync(`./func/prefixo/prefixo2_${from}.json`))
var prefix = prefixo2_on.prefixo
} else {
var prefix = setting.prefix 
}
		const type = require('@adiwajshing/baileys').getContentType(msg.message);
        const content = JSON.stringify(msg.message)
        const chats = (type === 'conversation') ? msg.message.conversation : (type == 'imageMessage') ? msg.message.imageMessage.caption : (type == 'videoMessage') ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : ''
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
        const isOwner = ownerNumber.includes(sender) || msg.key.fromMe
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
const isWelkom = isGroup ? welkom.includes(from) : false
const isAutofigu = isGroup ? autofigu.includes(from) : false
const isAntifake = isGroup ? antifake.includes(from) : false

//=========================================================================================//
const groupIdWelcomed = []	
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)
const groupIdBye = []
for(let obj of bye_group) groupIdBye.push(obj.id)
const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false
const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false
const groupIdWelcomed2 = []	
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)
const groupIdBye2 = []
for(let obj of bye_group2) groupIdBye2.push(obj.id)
const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false
const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	


        myMonths = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        myDays = ['domingo','segunda','Terça','Quarta','Quinta',"Sexta",'Sabado'];
        var getdate = new Date();
        var seconds = getdate.getSeconds();
        var minuto = getdate.getMinutes();
        var jam = getdate.getHours();
	    var ampm = jam >= 12 ? 'PM' : 'AM';
	    var day = getdate.getDate()
	    var mes = getdate.getMonth()
	    var thisMonth = myMonths[mes];
	    var thisDay = getdate.getDay()
	    var thisDay = myDays[thisDay];
	    var yy = getdate.getYear()
	    var year = (yy < 1000) ? yy + 1900 : yy;

        const mess = {
        	wait: "Loading...",
            sucesso: "sucesso",
            erro: "Vixi, ocorreu um erro aqui\n\nnforme meu dono usando */report (e o problema)*",
            invL: "Informe o link!",
            invQ: "Informe o texto!",
            owner: "Somente meu querido dono!",
            grupo: "Somente em grupo!",
            private: "Somente no pv!",
            admin: "Somente os admin!",
            botAdmin: "O bot precisa de admin né!"
        }
        
enviar = {
espere: "Loading...",
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}
        
        const fvimg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "fileLength": "50000000000", "viewOnce": true } }, "status": "DELIVERY_ACK" }
        const fvvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "videoMessage": { "title": `Choco Bot`,"h": `Choco Bot`,'duration': '99999','caption': `Choco Bot`,"viewOnce": true }}, "status": "SERVER_ACK"}
        
        const faketroli =  {
                key: {
			       fromMe: false,
			       participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		        },
		   message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imgbot
					},
					"title": "Kauanzin Bot",
					"description": "@kauan_dev", 
					"currencyCode": "USD",
					"priceAmount1000": "5000000",
					"salePriceAmount1000": "500",
					"url": "https://github.com/kauanjardini",
					"retailerId": `000000`,
					"productImageCount": 5
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		            }
	            }
            }
        
        const reply = (teks) => {
        	return conn.sendMessage(from, { text: teks }, { quoted: msg })
        }
        
       const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
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

require('./msgs.js')(conn, chats, reply, from, msg)
require('./msgs1.js')(conn, chats, reply, from, msg)

var blalogoofc = getBuffer(logo)
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${nomeBot}`, 'jpegThumbnail': blalogoofc}}}

////pvzin

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}

//=========================================================================================//
        
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuoted = (type == 'extendedTextMessage')
        
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        if (chats && isCmd) console.log(color("[ COMANDO ]  ", "cyan"), color(time, "red"),"Comando: ", color(command, 'green'), "||", "Type: ", color(type), "||", "em: ", color(groupName, "cyan"))
        if (chats && !isCmd) console.log(color("[ MESSAGE ]  ", "yellow"), color(time, "red"), "||", "Type: ", color(type), "||", "em: ", color(groupName, "cyan"))
        
//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false


        switch (command) {
        
  case 'sshgratis':
   exec('bash ssh/gerarssh.sh', (err, stdout) => {
   if(stdout.split('IP')[2] == undefined)return reply('Erro ao gerar ssh caso o erro persista informe ao meu dono')
					if (stdout){
					texto = `📱CRIADO COM SUCESSO📱

BAIXEI O APP USE A OPÇÃO SKYNERD

IP${stdout.split('IP')[2]}`
conn.sendBT(from, texto, "",[
{index: 1, urlButton: {displayText: 'Baixar APK', url: 'https://play.google.com/store/apps/details?id=com.rocket.net.vpn'}},
], selo)
}
				    })
        break      
          case 'sshlogin':
   exec('bash ssh/gerarlogin.sh', (err, stdout) => {
		if(stdout.split('IP')[2] == undefined)return reply('Erro ao gerar ssh caso o erro persista informe ao meu dono')
				if (stdout){
				texto = `📱CRIADO COM SUCESSO📱

BAIXEI O APP USE A OPÇÃO SKYNERD

IP${stdout.split('IP')[2]}`
conn.sendBT(from, texto, "",[
{index: 1, urlButton: {displayText: 'Baixar APK', url: 'https://play.google.com/store/apps/details?id=com.rocket.net.vpn'}},
], selo)
}
				    })
        break      
        case 'sshlista':
        case 'sshlist':
   exec('bash ssh/sshlist.sh', (err, stdout) => {
if (stdout){
txt = ``
for(b of stdout.split('to it.\n\n')[1].split('\n'))txt += `${b}\n`.replace(' 1', '')
reply(`Lista de usuarios:\n${txt}\nTotal: ${`${stdout.split('to it.\n\n')[1]}`.trim().split('\n').length} usuários`)
}else{
reply('erro ao consultar lista')
}				    })
        break      
        case 'sshlimit':
        exec('bash ssh/sshlimit.sh', (err, stdout) => {
if (stdout){
txt = ``
for(b of stdout.split('to it.\n\n')[1].split('\n'))txt += `${b}\n`.replace(' ', ' : ')
reply(`LIMIT DE USERS:\n\n${txt.trim()}\n\nTotal: ${`${stdout.split('to it.\n\n')[1]}`.trim().split('\n').length} usuários`)
}else{
reply('erro ao consultar lista')
}})

        break
case 'sshonline':
        exec('bash ssh/sshmonitor.sh', (err, stdout) => {
if (stdout){
txt = ``
for(b of stdout.split('to it.\n\n')[1].split('\n'))txt.includes('1,') ? txt += `${b.split('1,')[0]}\n` : undefined
reply(`USUARIOS ONLINE:\n${txt}\n\nTotal: ${b.split('\n').length} usuários`)
}else if(err){
reply('erro ao consultar lista')
console.log(err)
}})
             break

case 'renovarssh':
uss = args[0]
if(!uss)return reply(`Informe o usuário\nFormato correto: ${prefix+command} usuario`)
exec(`bash ssh/alterardata.sh ${uss}`, (err, stdout) => {
					if (err){			
reply('Informe um usuário correto')
					 }else if(stdout){
					reply(`✅ RENOVADO COM SUCESSO ✅
USUÁRIO: ${uss}
DIAS: 31 DIAS`)
}else{
reply('Erroo')
}
				    })
break

case 'menussh':
texto = `☎️📱SKYNERD MANANGER SSH📱☎️\n\n
📱 *GERAR TESTE 24HS* - /sshgratis \n
📱 *LISTA USUARIOS* - /sshlista\n
📱 *RENOVAR USUARIOS* - /renovarssh\n
📱 *LIMITE DE USUARIOS* - /sshlimit\n
📱 *USUARIOS ONLINE* - /sshonline\n
📱 *ACESSO 31 DIAS* - /sshlogin`
switch(args[0]){
case '2':
conn.sendBT(from, texto, "",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'LISTA DE USUÁRIOS', id: `${prefix}sshlista`}},    
{index: 3, quickReplyButton: {displayText: 'LIMITES SSH USUÁRIOS', id:`${prefix}sshlimit`}}
], selo)
break
default:
conn.sendBT(from, texto, "",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'LOGIN SSH 31 DIAS', id: `${prefix}sshlogin`}},    
{index: 3, quickReplyButton: {displayText: 'TESTE SSH GRATIS', id:`${prefix}sshgratis`}},
{index: 2, quickReplyButton: {displayText: 'Não está aqui', id: `${prefix}menussh 2`}}
], selo)}
break

case 'dados':
case 'ping':
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `
┏─────── ─ ━
┃ 𝑇𝑒𝑚𝑝𝑜 𝑂𝑛-𝑙𝑖𝑛𝑒: 
┣•  ${kyun(uptime)}
┃
┣• 𝑉𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑𝑒: ${String(r.toFixed(3))}
┃
┣• ${!isGroup ? `𝑈𝑠𝑢𝑎𝑟𝑖𝑜: ${pushname}` :  `𝐺𝑟𝑢𝑝𝑜: ${groupName}`}
┃
┣• 𝐷𝑎𝑡𝑎: ${date} 
┃
┣• 𝐻𝑜𝑟𝑎: ${hora1} 
┃
┗─────── ─ ━
`
await conn.sendMessage(from, {text: bla}, {quoted: selo})
break        
        
case 'blockcmd':
if(!isOwner) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi bloqueado`)
break

case 'unblockcmd':
if(!isOwner) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desbloqueado`)
break


case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return conn.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: teks1}, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: sug}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break



case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if (!isOwner && !isCmdy && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
conn.sendMessage(i, {text: txt})
}
reply(`Enviando com sucesso `)
}
break

case 'igstalk':
if(args.length < 1) return reply('Cadê o nome?')
usur = args.join(" ")
teste = await fetchJson(`https://pencarikode.xyz/stalk/instagram?username=${usur}&apikey=pais`)
teste = teste.result.user
corno = `Nome : ${teste.username}\n`
corno += `PK : ${teste.pk}\n`
await conn.sendMessage(from, {image: {url: teste.profile_pic_url}, caption: `${corno}`}, {quoted:info})
break

case 'celular': //alterado
if (!q) return reply(`Qual celular você está procurando?`)
ane = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
busca_celular = `📝 Titulo: ${ane.judul}
❗Última atualização: ${ane.rilis}
📱 Tamanho do celular: ${ane.ukuran}
⚡ Tipo: ${ane.type}
🗃️ Armazenamento: ${ane.storage}
📴 Tela: ${ane.display}
📳 Polegada: ${ane.inchi}
🔰 Resolução da câmera: ${ane.pixel}
📲 Resolução do video: ${ane.videoPixel}
💭 Ram do celular: ${ane.ram}
👤 Hardware do celular: ${ane.chipset}
⚠️ Bateria: ${ane.batrai}
🔋 Tipo da bateria: ${ane.merek_batre}`
conn.sendMessage(from, {image: {url: `${ane.thumb}`}, caption: `${busca_celular}`}, {quoted: info})
break

case 'gimage':
try {
blar = Math.floor(Math.random() * 300)
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/gimage?txt=${q}&apikey=${keyale}`)
conn.sendMessage(from, {image: {url:bla.resultado.result[`${blar}`].url}}, {quoted: info}).catch(e => {
reply("ERROR, não foi encontrado, tente novamente...")
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'join': case 'entrar':
if (!isOwner) return reply('Somente proprietário!')
string = args.join(' ')
if (!string) return reply('Insira um link de convite ao lado do comando.')
if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
await conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if (String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if (String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break


case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break
case 'clearchat':
case 'limparchat':  
case 'limparmsg':  
if (!isOwner && !info.key.fromMe) return reply(enviar.msg.donosmt)
await conn.chatModify({ clear: { message: { id: String, fromMe: true } } }, from, [])
reply("Chat limpo")
break

case 'addpalavra':
if (!isOwner && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!isOwner && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão removido da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'legendabv':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(from)
welcome_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group.push(json)
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas criada com sucesso!*')
}
break

case 'legendasaiu':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group.push(json)
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída criada com sucesso!*')
}
break

case 'legendabv2':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(from)
welcome_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group2.push(json)
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 criada com sucesso!*')
}
break

case 'legendasaiu2':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isByed2) {
var ind = groupIdBye2.indexOf(from)
bye_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group2.push(json)
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 criada com sucesso!*')
}
break

case 'deletar':  case 'apagar':  case 'delete':   case 'del':  case 'd':
if (!isGroup)return reply(enviar.msg.grupo)
if (!isOwner && !isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender }})
.catch((err) => { 
console.log(err)
reply('A mensagem não foi enviado pelo bot...')
})
break

case 'fundobemvindo':
case 'fundobv':  
if (!isOwner && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if (!isOwner && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break
        
        
//menus

        case 'menuadm':
sendBimg(from, `${logo}`, adms(prefix), `☂️`, [
{buttonId: `${prefix}infobot`, buttonText: {displayText: `♦️ ÁUDIO DE INFORMAR SOBRE O DONO ♣️`}, type: 1}, {buttonId: `${prefix}infodono`, buttonText: {displayText: `💥 INFORMAÇÕES DO DONO⚡`}, type: 1}], selo) 
break 

case 'cmdmem':  
sendBimg(from, `${logo}`, cmdmembros(prefix), [
{buttonId: `${prefix}menu`, buttonText: {displayText: `VOLTAR`}, type: 1}, {buttonId: `${prefix}menu2`, buttonText: {displayText: `MENU PRINCIPAL`}, type: 1}], selo)
break 

case 'efeitos':  
sendBimg(from, `${logo}`, efeitos(prefix), `🌀`, [
{buttonId: `${prefix}sshgratis`, buttonText: {displayText: `🤡 TESTE SSH GRATIS 🤡`}, type: 1}, {buttonId: `${prefix}menu2`, buttonText: {displayText: `🔸 MENU 🔸`}, type: 1}], selo)
break 



case 'owner':
case 'odono':
case 'dono': 
case 'infodono':  
numerodn = setting.numerodono 
await conn.sendMessage(from, {image: {url: logo}, caption: infodono(prefix, numerodn, nomeBot)}, {quoted: selo})
break 

case 'alteradores':
await conn.sendMessage(from, {image: {url: logo}, caption: alteradores(prefix)}, {quoted: selo})
break 

case 'menupremium':
case 'menuprem':
await conn.sendMessage(from, {text: menuprem(prefix)}, {quoted: selo})
break

case 'configurar-bot':
await conn.sendMessage(from, {text: configbot(prefix)}, {quoted: selo})
break

case 'comandos-script':
await conn.sendMessage(from, {text: cmd_termux(prefix)}, {quoted: selo})
break

case 'hospedar':
await conn.sendMessage(from, {text: hospedar(prefix)}, {quoted: selo})
break

case 'destrava':
if (!isGroupAdmins) return reply(enviar.msg.adm)
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: msg})
break 


case 'tabela':
await conn.sendMessage(from, {text: tabela(prefix, nomeBot)}, {quoted: selo})
break 

case 'destrava2':
if (!isGroupAdmins) return reply(enviar.msg.adm)
await conn.sendMessage(from, {text: destrava2 (prefix)}, {quoted: msg})
break 

case 'infovotação':
case 'infovotacao':  
await conn.sendMessage(from, {text: infovotacao(prefix, pushname)}, {quoted: selo})
break

case 'infobemvindo':
case 'infobv':  
await conn.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
break
        
        
//AFK...        

case 'ausente': case 'off': case 'afk':
if(!isOwner) return reply("Comando especial para o dono.")
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
msgz = args.join(" ")

var catmsgaus = {
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: msgz
}

if(!fs.existsSync(`./func/afk/afk-@${nmrdnofc}.json`)) {
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
} else {
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
}
}
reply(`Mensagem de ausência criada com sucesso...`)
break

case 'ativo': case 'on': case 'voltei':
if(!isOwner) return reply("Comando especial para o dono.")
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {  
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
break
        
//OUTROS...

case 'nick':
case 'gerarnick':
case 'fazernick':
try {
nick = args.join(' ')
if(!nick) return reply('Escreva o Nick ou nome que você quer personalizar.')
fetch(`https://kauan-le.herokuapp.com/api/fazernick?nome=${nick}&apikey=${keykauan}`)
.then(e => e.json())
.then(dados => {
var emoji = `🔮`
txt = '💈Nicks Gerados Com Sucesso!💈\n\n'
for (let i = 0; i < dados.length; i++) {
txt += `${emoji} ${dados[i]}\n`
}
txt += `\n\n
➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Não pode incluir letras modificadas nem emojis, ou pode ser que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'chance':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
var avb = body.slice(7)
if (args.length < 1) return conn.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: msg})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
await conn.sendMessage(from, {text: hasil, contextInfo: {mentionedJid: [sender]}}, {quoted: msg})
break

case 'inativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
if(countMessage[ind].numbers[indnum].messages == 2570) {
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? -1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais inativos do grupo :\n\n'
try {
for (let i = 0; i < groupMembers.length; i++) {
if (i) boardi += `${i}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
console.log(err)
await conn.sendMessage(from, {text: `A`}, {quoted: msg})
}
}
break

case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
if(countMessage[ind].numbers < 5)return conn.sendMessage(from, {text: `É necessário 5 jogadores para se construir um ranking`}, {quoted: msg})
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 4) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`			
				
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await conn.sendMessage(from, {text: `É necessário 5 jogadores para se construir um ranking`}, {quoted: msg})
}
break

case 'rankinativo':
case 'rankinativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 6) return reply('Necessita do registro de 6 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages > b.messages) ? 0 : -1)
mentioned_jid = []
boardi = 'Rank dos mais ghost do Grupo:\n\n'
try {
for (let i = 0; i < 6; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 4) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 5) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`		
				
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await conn.sendMessage(from, {text: `É necessário 6 jogadores para se construir um ranking`}, {quoted: msg})
}
break


case 'checkativo':
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break        
                        
//=================(ANTS)=================\\

case 'antictt':
case 'anticontato':  
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply('Ja esta Desativado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
case 'antidoc':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (Antidoc) return reply('Ja esta ativo')
antidoc.push(from)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('🌀 Ativou com sucesso o recurso de anti documento neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!Antidoc) return reply('Ja esta Desativado')
pesquisar = from
processo = antidoc.indexOf(pesquisar)
while(processo >= 0){
antidoc.splice(processo, 1)
processo = antidoc.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiimg':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antinotas':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'limitecaracteres':
case 'limiteflood':  
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'antiporno':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPorn) return reply('Ja esta ativo')
antiporn.push(from)
fs.writeFileSync('./datab/ants/antiporn.json', JSON.stringify(antiporn))
reply('🌀 Ativou com sucesso o recurso de antiporn neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPorn) return reply('Ja esta Desativado')
pesquisar = from
processo = antiporn.indexOf(pesquisar)
while(processo >= 0){
antiporn.splice(processo, 1)
processo = antiporn.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antiporn.json', JSON.stringify(antiporn))
reply('‼️ Desativou com sucesso o recurso de antiporn neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if (Number(args[0]) === 1) {
if (isPalavrao) return reply('Ja esta ativo.')
palavrao.push(from)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply('🌀 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isPalavrao) return reply('Ja esta Desativado')
pesquisar = from
processo = palavrao.indexOf(pesquisar)
while(processo >= 0){
palavrao.splice(processo, 1)
processo = palavrao.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply('‼️ Desativou com sucesso o recurso de Anti Palavra harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'antilinkhard':
case 'antilink':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autofigu': case 'autosticker':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAutofigu) return reply('Ja esta ativo')
autofigu.push(from)
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply('Ja esta Desativado')
pesquisar = from
processo = autofigu.indexOf(pesquisar)
while(processo >= 0){
autofigu.splice(processo, 1)
processo = autofigu.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkgp':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntilinkgp) return reply('Ja esta ativo')
antilinkgp.push(from)
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
} else if (Number(args[0]) === 0) {
if (!isAntilinkgp) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkgp.indexOf(pesquisar)
while(processo >= 0){
antilinkgp.splice(processo, 1)
processo = antilinkgp.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break



case 'bemvindo':
case 'welcome':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if (Number(args[0]) === 1) {
reply(`Devo Lembrar que você deve determinar a legenda desse grupo, após ativar essa função, a legenda funciona por grupo, se deseja saber mais informações sobre, digite ${prefix}infobemvindo`)  
if (isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
welkom2.push(from)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(welkom2).forEach((i) => {
if (welkom2[i] === from) {
position = i
}
})
if (position !== false) {
welkom2.splice(position, 1)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
}
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break


        ///base

case 'nomegp':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
blat = args.join(" ")
conn.groupUpdateSubject(from, `${blat}`)
conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: msg})
break

case 'descgp':
case 'descriçãogp':  
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
blabla = args.join(" ")
conn.groupUpdateDescription(from, `${blabla}`)
conn.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: msg})
break

case 'setfotogp':
case 'fotogp':  
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await conn.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break



case 'linkgp':
case 'linkgroup':
if (!isGroupAdmins) return reply(mess.admin)
if (!isGroup) return reply(mess.grupo)
if (!isBotGroupAdmins) return reply(mess.Badmin)
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'grupo': 
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(mess.grupo)
if(!isGroupAdmins)return reply(mess.admin)
ppUrl = await conn.profilePictureUrl(from, 'image')
const metadata = await conn.groupMetadata(from) 
conn.sendMessage(from, {image: {url: ppUrl}, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc}`, thumbnail: null}, {quoted: msg})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !msg.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : msg.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
conn.sendMessage(from, options)
} else if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {image: buff, mentions: yd}, {quoted: msg})
} else if ((isMedia && !msg.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : msg.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: msg})
} else if ((isMedia && !msg.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? msg.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : msg.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: msg})
} else if ((isMedia && !msg.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? msg.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : msg.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: msg})
} else if(budy){
if(q.length < 1) return reply('Citar oq?')
conn.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'marcar':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
teks = (args.length > 0) ? args.join(' ') : ''
teks += '\n\n'
for (mem of groupMembers.map(i => i.id)) {
teks += `*#* @${mem.split('@')[0]}\n`
}
conn.sendMessage(from, {text: teks, mentions: groupMembers.map(i => i.id)})
} catch (e){
reply(e.stack)
}
break

case 'marcar2':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
teks = (args.length > 0) ? q : ''
teks += '\n\n'
for (mem of groupMembers.map(i => i.id)) {
teks += `╠➥ @${mem.split('@')[0]}\n`
}
conn.sendMessage(from, {text: teks, mentions: groupMembers.map(i => i.id)})
} catch {
reply('ERROR!!')
}
break

case 'marcarwa':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 0) ? q : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
conn.sendMessage(from, {text: teks}, {quoted: msg})
} catch(e) {
reply(e.stack)
}
break



case 'reviver':
if (!isGroup) return reply('Esse comando so funciona em grupo, sinto muito')
if(!isOwner) return reply("Comando Desativado pelo dono...")
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
add = msg.message.extendedTextMessage.contextInfo.participant
sleep(5000)
response2 = await conn.groupParticipantsUpdate(from, [add], "add" )
reply('Usuario Adicionado de volta ao grupo.')
break

case 'add':
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')  
if(!isOwner) return reply('Comando Desativado por questões de segurança, estava ocasionandoo Ban do número do bot.')
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if(q.length < 1) return reply('Quer adicionar uma alma?')  
try {
tdt = args[0]
if(tdt.length < 1) return reply(`Digita o número que deseja add, exemplo: ${prefix}add 558198923680`)
if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage === undefined) {
adduser = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')
reply('Irei adicionar ele(a) em 5 segundos...')  
await delay(5000)
responser = await conn.groupParticipantsUpdate(from, [adduser], "add")
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo!')
if(inv[0].code == 403) return reply('Erro, conta privada do usuário')
if(inv[0].code == 408) return reply('Erro, usuário acabou de sair')
if(inv[0].code == 401) return reply('Erro, porque o bot está bloqueado pelo alvo ')
} else {
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')  
reply('Irei adicionar ele(a) em 5 segundos...')  
adduser = msg.message.extendedTextMessage.contextInfo.participant
await delay(5000)
responser =  await conn.groupParticipantsUpdate(from, [adduser], "add")
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo! ')
if(inv[0].code == 403) return reply('Falhou, porque em privado ')
if(inv[0].code == 408) return reply('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return reply('Falha, porque o bot está bloqueado pelo alvo ')
}
} catch (e){
if(!q.includes("@")) {
var addusr = msg.message.extendedTextMessage.contextInfo.participant
} else {
var addusr = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` 
}
if(String(e).includes("responser is not defined")) {
linkgc = await conn.groupInviteCode(from)  
conn.sendMessage(addusr, {text: `Você está com o número privado para adicionar em grupos, então está ae o link do grupo : https://chat.whatsapp.com/${linkgc}`})
} else {
reply('Izi, se não for adicionado provavelmente ele privou só para contatos adicionar ele em grupo.')
}
}
break

case 'sairgp':
if(isGroup && !isOwner && !msg.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
conn.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!isOwner ) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!isOwner ) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "demote")
break

case 'bann':
//if(!isPremium) return reply("Apenas usuário premium.")
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if(!budy.includes("@")) {
if (msg.message.extendedTextMessage == undefined || msg.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja remover ele ou marque com ${prefix}ban @marcar-ele`)
mentioned = msg.message.extendedTextMessage.contextInfo.participant
if(!JSON.stringify(groupMembers).includes(mentioned)) return reply("Este usuário já foi removido do grupo.")
if(premium.includes(mentioned)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned], true)
if(groupAdmins.includes(mentioned)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned], true)
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "remove")  
} else {
if(q.length > 15) return reply('Só pode remover uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
if(!JSON.stringify(groupMembers).includes(mentioned2)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(mentioned2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned2)) return reply('Não posso remover meu dono 🤧')
if(premium.includes(mentioned2)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned, sender], true)
if(groupAdmins.includes(mentioned2)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned, sender], true)
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) - `, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "remove")
}
break

case 'ban': case 'banir': case 'kick':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
try {
if(!budy.includes("@")) {
if (msg.message.extendedTextMessage == undefined || msg.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja remover ele ou marque com ${prefix}ban @marcar-ele`)
mentioned = msg.message.extendedTextMessage.contextInfo.participant
if(!JSON.stringify(groupMembers).includes(mentioned)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "remove")  
} else {
if(q.length > 15) return reply('Só pode remover uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
if(botNumber.includes(mentioned2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned2)) return reply('Não posso remover meu dono 🤧')
if(!JSON.stringify(groupMembers).includes(mentioned2)) return reply("Este usuário já foi removido do grupo.")
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) - `, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "remove")
}
} catch (e) {
console.log(e)
}
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
conn.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply('Qual foi membro comum?')
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
conn.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'listagp': //case by: Bielzinho-Bot
if (!isOwner && !msg.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await conn.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)

teks1 = `*LISTA DE GRUPOS*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !isOwner) return reply('Precisa ser Dono')
if(!isAdeusCara) {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')  
}
if(!budy.includes(" ")) {
if(!msg.message?.extendedTextMessage?.contextInfo?.participant
) return reply("Marque a mensagem do usuário que deseja add na lista negra, ou coloque o número da fórma que copiou de dados do usuário.")  
var mentioned = msg.message?.extendedTextMessage?.contextInfo?.participant

var ind = dbids.indexOf(from)
if(isAdeusCara) {
var numind = adeuscara[ind].number.indexOf(`${mentioned.split("@")[0]}`)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(`${mentioned.split("@")[0]}`)
} else {
adeuscara.push({
groupId: from,
actived: false,
number: [`${mentioned.split("@")[0]}`]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
} else {
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
}
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(mess.admin)
if (!isGroupAdmins && !isOwner) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'nome-bot':
if (!isOwner  && !msg.key.fromMe) return reply(mess.owner)  
nomeBot = args.join(" ") 
setting.nomeBot = nomeBot
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do seu bot foi alterado com sucesso para : ${setting.nomeBot}`)
break

case 'nick-dono':
if (!isOwner  && !msg.key.fromMe) return reply(mess.owner)  
setting.NickDono = args.join(" ")
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O Nick Do Dono foi configurado para : ${setting.NickDono}`)
break

case 'numero-dono':
if (!isOwner && !msg.key.fromMe) return reply(mess.owner)  
reply(`O número dono foi configurado com sucesso para : ${q}\n\n_ REINICIANDO EM 3. 2 . 1`)
numerodonoofc = setting.numerodono 
numerodonoofc = args.join(" ")
setting.numerodono = numerodonoofc
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
break

case 'prefixo-bot': case 'setprefix':
if (args.length < 1) return
if (!isOwner  && !msg.key.fromMe) return reply(mess.owner)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'a_autorepo':
if(!isOwner) return reply("Apenas dono") 
reply(`Auto Resposta - [ Ativada ] - com sucesso...`)
fs.writeFileSync(`./func/autorepo/autorepo_${from}.json`, JSON.stringify([], null, 2))
break

case 'd_autorepo':
if(!isOwner) return reply("Apenas dono") 
reply(`Auto Resposta - [ Desativada ] - com sucesso...`)
fs.unlinkSync(`./func/autorepo/autorepo_${from}.json`)
break

case 'prefixo_tipo2':
case 'prefixo_tipo_off':  
if (!isOwner  ) return reply(mess.owner)
if(budy.includes(`prefixo_tipo2`)) {
if(args.length < 1) return reply(`Digite o prefixo que deseja :\nExemplo: ${prefix}prefixo_tipo2 -`)    
var prefixo2_ = {
prefixo: q
}
if(!fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) {
fs.writeFileSync(`./func/prefixo/prefixo2_${from}.json`, JSON.stringify(prefixo2_, null, 2))
reply(`Prefixo único só para este grupo foi criado com sucesso..\n\n Prefixo: ${q}`)
} else {
fs.unlinkSync(`./func/prefixo/prefixo2_${from}.json`) 
fs.writeFileSync(`./func/prefixo/prefixo2_${from}.json`, JSON.stringify(prefixo2_, null, 2))
reply(`Prefixo re-criado com sucesso de : ${prefixo2_on.prefixo} para : ${q}`)
}
} else if(command == "prefixo_tipo_off") {
if(!fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) return reply(`Já está no prefixo original do bot, que é : ${setting.prefix}`)
fs.unlinkSync(`./func/prefixo/prefixo2_${from}.json`)  
reply(`Parabéns, voltou ao prefixo original : ${setting.prefix}`)
}
break

case 'fotomenu':
case 'fundomenu':
if (!isOwner  && !msg.key.fromMe) return reply(mess.owner)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem 2 vez com esse comando..')
if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : msg.message.imageMessage
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
logoslink.logo = res
fs.writeFileSync('./dono/logos.json', JSON.stringify(logoslink, null, '\t'))
reply(`A foto do menu foi alterada com sucesso para: ${res}`)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefix + command}`)
}
break

case 'nomegp':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
await conn.groupUpdateSubject(from, `${body.slice(9)}`)
await conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: msg})
break

case 'fotobot':
if (!isOwner && !msg.key.fromMe) return reply(mess.owner)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await conn.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if (!isOwner &&!ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.admin)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Marque alguem')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.id === mentioned)
try {
pp = await conn.profilePictureUrl(id)
buffer = await getBuffer(pp)
conn.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}

break


case 'bcgp':
case 'bcgc':  
if (!isOwner && !msg.key.fromMe) return reply(mess.owner)
if (!isGroupAdmins) return reply(mess.admin)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = msg.participant
if (isMedia && !msg.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (let _ of fgp) {
conn.sendMessage(_.id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('tm enviada com sucesso')
} else {
for (let _ of fgp) {
sendMess(_.id, `*「 TM SKYNERD 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break


case 'getquoted':
reply(JSON.stringify(msg.message.extendedTextMessage.contextInfo, null, 3))
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(mess.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'aviso_gp':
if(!isOwner) return reply("Apenas dono...")
if(budy.includes(`${prefix}execut`) || budy.includes(`=>`) || budy.includes(`>`)) return
if(!budy.includes("|")) return reply(`Cadê a |\nExemplo: ${prefix}aviso_gp jantar já está pronto|19/00/00`)
var[qds, qds2] = q.split("|")  
var blaaviso_ndms = `./func/avisos/aviso_${from}.json`
if(fs.existsSync(blaaviso_ndms)) {
var avisos_gps = JSON.parse(fs.readFileSync(blaaviso_ndms))
}
if(!fs.existsSync(blaaviso_ndms)) {
var avs = {
texto: qds, 
hora: qds2
}
fs.writeFileSync(blaaviso_ndms, JSON.stringify(avs, null, 2))
reply(`Aviso feito com sucesso, programado para todos os dias...`)
} else {
if(fs.existsSync(blaaviso_ndms)) {
fs.unlinkSync(blaaviso_ndms)
var avs = {
texto: qds, 
hora: qds2
}
fs.writeFileSync(blaaviso_ndms, JSON.stringify(avs, null, 2))
reply(`Aviso re-feito com sucesso, programado para todos os dias..`)
}
}
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !isOwner) return reply("Só adm ou dono pode utilizar este comando.")
msgz = args.join(" ")

msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Horario: msgtmpol, 
Data: datinhaofc, 
Tabela: msgz
}

if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
fs.unlinkSync("./func/tabela/tabela-" + from + ".json");
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./func/tabela/tabela-${from}.json`)); 

blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`

conn.sendMessage(from, {text: blity}, {quoted: msg})
break

case 'alugado': case 'tempodesair': case 'tempo-aluguel': case 'aluguel': 
if(!isOwner && !msg.key.fromMe) return 
txt = args.join(" ")
if(!txt.includes("/")) return reply(`O formato da data é assim : 03/04/22`)
msgz = args.join(" ").replace(" ", "")

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Data_que_alugou: datinhaofc, 
Data_de_sair: msgz
}

if(!fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/sairgp/sairgp-" + from + ".json")) {
fs.unlinkSync("./func/sairgp/sairgp-" + from + ".json");
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tempo de quando vai expirar o aluguel do bot e irei sair na data exata..`)
break

case 'tempo-fgp': 
if(!isOwner) return 
txt = args.join(" ")
.replace(" |", "|")
.replace("| ", "|")
var [txt1,txt2] = txt.split('|')
var blarpty = {
fechargp: txt1, 
abrirgp: txt2, 
grupoid: from
}

if(!fs.existsSync(`./func/fgp-${from}.json`)) {
fs.writeFileSync(`./func/fgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/fgp-" + from + ".json")) {
fs.unlinkSync("./func/fgp-" + from + ".json");
fs.writeFileSync(`./func/fgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tempo determinado..`)
break

case 'fechar-gp':
if(!isOwner) return reply("Comando especial para o dono.")
if(!q.includes("/") && !q.length <= 17) return reply(`Olá, você tem que determinar os 2 tempo pra o bot fechar o grupo e abrir, por exemplo..\n${prefix}fechar-gp 1m/2m\n\nEle fechará o grupo depois de um minuto, e depois abre após 2 minutos....`)
qtxt = args.join(" ").replace(" /", "/").replace("/ ", "/").replace("1m", "60000").replace("2m", "120000").replace("3m", "180000").replace("30m", "1800000").replace("1h", "3600000").replace("2h", "7200000").replace("7h", "25200000")

txt1 = qtxt.split("/")[0]
txt2 = qtxt.split("/")[1]

var fcgp = {
tempo1: txt1, 
tempo2: txt2, 
grupo: from
}

if(!fs.existsSync(`./func/fechar-abrir-gp-${from}.json`)) {
fs.writeFileSync(`./func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
} else {
if (fs.existsSync("./func/fechar-abrir-gp-" + from + ".json")) {
fs.unlinkSync("./func/fechar-abrir-gp-" + from + ".json");
fs.writeFileSync(`./func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
}
}
reply(`Tempo de fechar o grupo e abrir em tal horário foi programado com sucesso..`)
const tempodttl = JSON.parse(fs.readFileSync(`./func/fechar-abrir-gp-${from}.json`)); 
setTimeout(async () => {
reply("Grupo Fechado..")
await conn.groupSettingUpdate(from, 'announcement')  
}, `${tempodttl.tempo1}`)

setTimeout(async () => {
reply("Grupo Aberto..")
await conn.groupSettingUpdate(from, 'not_announcement')  
}, `${tempodttl.tempo2}`)

break




//fim
        
        
case 'iptv':
texto = `Desde já agradecemos pelo contato!

Você está prestes a usufruir dos serviços da maior plataforma de streaming da América Latina! 

Com todos os canais disponíveis em território brasileiro. 

Tudo isso por apenas R$25,00 mensais🤗🤗 Para você conhecer melhor o nosso serviço, gostaríamos de lhe proporcionar um teste gratuito e sem compromisso por 3h. Você tem disponibilidade para testar agora? 

Escolha A para sim B para não`
conn.sendBT(from, texto, 
"",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'Sim', id: `a`}},    
{index: 2, quickReplyButton: {displayText: 'Não', id: `b`}},  
], selo)
break

case 'net':
texto = `Agora sim vou lhe ajudar no que deseja!

Me diga uma coisa aqui meu amigo(a), você ja usou internet por aplicavito ou VPN como é tbem chamado nossa internet?

Escolha Aa para sim Bb para não`
conn.sendBT(from, texto, 
"",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'Sim', id: `aa`}},    
{index: 2, quickReplyButton: {displayText: 'Não', id: `bb`}},  
], selo)
break


case 'menu':
case 'help':
case 'comandos':
conn.sendMessage(from, {image:{url:logo}, caption: menu(prefix, nomeBot)},{ quoted: selo})
/*.then(e => {
conn.sendBT(from, `Olá seja muito bem vindo sou Skynerd e vou atender você agora. Leia os termos nos links abaixo antes de comprar e esteja ciente dos mesmo\n
Termo de compra* - https://paste.anasor.com/paste.php?raw&id=18756\n*termo de uso* - https://paste.anasor.com/paste.php?raw&id=18755\nAgora click no botão desejado.\n\n*NÃO MANDE ÁUDIO, DIGITE OK*?`, 
"",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'SOBRE A INTERNET', id: `${prefix}net`}},    
{index: 2, quickReplyButton: {displayText: 'SOBRE A IPTV', id: `${prefix}iptv`}},  
{index: 3, quickReplyButton: {displayText: 'TESTE SSH GRATIS', id:`${prefix}sshgratis`}}
], selo)
})*/
break 

case 'menu2':
botaolist = [
{title: "LISTA",
rows: [
{title: "VIDEO AULA´", rowId: `${prefix}menu3`},
{title: "PAGAMENTO", rowId: `${prefix}menuadm`},
{title: "LINK DOS PAINEIS", rowId: `${prefix}sshgratis`},
{title: "COMANDOS PARA MEMBROS", rowId: `${prefix}infodono`},
{title: "VALORES", rowId: `${prefix}hospedar`},
]
}]
sendlistA(from, "Menu de comandos", "SELECIONE UMA OPÇÃO", "FICA A VONTADE", "MENU PRINCIPAL", botaolist)
break

///Downloaders


        case 'film': {
        	if (!q) return reply(mess.invQ)
            reply(mess.wait)
        	film(q).then(async data => {
        	let txt = "FILM\n\n"
        	for (let res of data) {
        	txt += `• Titulo : ${res.judul}\n`
            txt += `• Qualidade : ${res.quality}\n`
            txt += `• Type : ${res.type}\n`
            txt += `• Upload : ${res.type}\n`
            txt += `• Link : ${res.link}\n\n`
            }
        conn.sendMessage(from, { image: { url: data[0].thumb }, caption: txt }, { quoted: msg })
        }).catch(e => reply(e))
        }
        break
        
        // Send image url 
        case 'sendimage':
        conn.sendMessage(from, { image: { url: q }, fileLength: "50000000000" }, { msg })
        break
        case 'sendvideo':
        conn.sendMessage(from, { video: { url: q }, fileLength: "50000000000" }, { msg })
        break
        
        case 'dono':
        case 'criador': {
            const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Kauanzin\n' // full name
            + 'ORG:Developer Kauanzin Bot;\n' // the organization of the contact
            + 'item1.TEL;waid=554491150998:+55 4491150998\n' // WhatsApp ID + phone number
            + 'item1.X-ABLabel:Criador Kauanzin Bot\n'
            + `item2.TEL;waid=${setting.numerodono}:${setting.numerodono}\n` // WhatsApp ID + phone number
            + 'item2.X-ABLabel:dono\n'
            + 'item3.EMAIL;type=INTERNET: kauanjardini@gmail.com\n' // your email
            + 'item3.X-ABLabel:Email\n'
            + 'item4.URL;Web: https://github.com/kauanjardini\n' // your link
            + 'item4.X-ABLabel:Github\n'
            + 'END:VCARD'
            await conn.sendMessage(from, { contacts: { displayname: "Rzx Gamz", contacts: [{ vcard }] }}, { quoted: msg })
        }
        break
        
        default:
        
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
        
        
        if (isCmd) {
uptime = process.uptime() 
conn.sendMessage(from, {text: `
┏━━━┅━━━━━━ ━ ━━
┗━ ━━ SKYNERD
┃
┃• _Comando Inesistente ✧࿐
┃
┃• _Digite_ : ${prefix}menu
┃
┃• _Hora_ : ${hora2}
┃
┗────────────────╯`}, {quoted: selo}) 
}
        
        if (isOwner){
        if (chats.startsWith("> ")){
                try {
                    let evaled = await eval(chats.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    reply(evaled)
                } catch (err) {
                    reply(`${err}`)
               }
         } else if (chats.startsWith('=>')) {
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${q} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                } else if (chats.startsWith("$ ")){
                exec(chats.slice(2), (err, stdout) => {
					if (err) return reply(`${err}`)
					if (stdout) reply(`${stdout}`)
				    })
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
