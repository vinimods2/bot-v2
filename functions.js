module.exports = configMsg = async (conn) => {

// ENVIAR BOTÃO COM TEXTO
conn.sendBtext = async (id, text1, desc1, but = [], vr) => { buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1}
conn.sendMessage(id, buttonMessage, {quoted: vr})}

conn.reagir = async (idgp, emj) => { reactionMessage = {
react: {
text: emj, 
key: msg.key}} 
conn.sendMessage(idgp, reactionMessage)}

// ENVIAR BOTÃO COM IMAGEM
conn.sendBimg = async (id, img1, text1, desc1, but = [], vr) => { buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4}
conn.sendMessage(id, buttonMessage, {quoted: vr})}

// ENVIAR MENU COM GIF OU QUALQUER DO TIPO
conn.sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => { buttonMessage = {
video: {url: gif1},
caption: text1,
gifPlayback: true, 
footerText: desc1,
buttons: but,
headerType: 4}
conn.sendMessage(id, buttonMessage, {quoted: vr}) }

// PRA ENVIAR BOTÃO DE TEMPLATE
conn.sendBimgT = async (id, img1, text1, desc1, but = [], vr) => { templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,}
conn.sendMessage(id, templateMessage, {quoted: vr})}

conn.sendlistA = async (id, txt1, txt2, title1, btext, but) => { listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections: but}
conn.sendMessage(id, listMessage)  }


}


let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update '${__filename}'`)
	delete require.cache[file]
	require(file)
})