const { color, bgcolor } = require("../lib/color")
const { Boom }  = require('@hapi/boom');
const { startSock } = require("../index.js")  
const { exec } = require('child_process'); 



async function conpdate () {

module.exports = conn = async (conn, connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications, qrcode) => {

try {

if(qr) {
console.log(color("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

if(connection === "close") {
  
const RECONECTAR_ = new Boom(lastDisconnect?.error)?.output.statusCode 

if(String(lastDisconnect.error).includes("Stream Errored (conflict)")) {
console.log(color(`SE ESSA MENSAGEM APARECER APENAS UMA VEZ, IGNORE:

< OUTRA SESSÃO ESTÁ ABERTA E LIGADO_ DESLIGUE ESTA PARA PERMANECER EM QUAL ATIVOU POR ÚLTIMO.. >`, "yellow"))    
} else if(String(lastDisconnect.error).includes("Connection was lost"))
{
console.log(color("Conexão fraca, apenas ignore esta mensagem..", "gray"))
} else if(String(lastDisconnect.error).includes("Connection Failure")) {
console.log(color("O QRCODE DO BOT FOI DESCONECTADO, RELEIA O QRCODE DENOVO PARA CONECTAR", "red"))
exec(`rm -rf ${qrcode}`)
process.exit()
} else if(String(lastDisconnect.error).includes("Stream Errored (restart required)")) {
console.log(color("Reiniciamento nescessario para estabelecer a conexão..."))
startSock()
setTimeout(() => {
process.exit()
}, 1000)
} else if(String(lastDisconnect.error).includes("Connection Terminated by Server")) {
return
} else if(String(lastDisconnect.error).includes("Connection Terminated")) {
console.log(color("Conexão está querendo terminar, mas apenas ignore, irei reiniciar o bot...", "gray"))
process.exit() 
} else {
console.log("Conexão fechada por :", lastDisconnect.error)
}


if (RECONECTAR_ === 503) {
return startSock()
} else if(RECONECTAR_ === 428) {
return startSock()  
} else if(RECONECTAR_ === 500) {
return startSock()  
} else if(RECONECTAR_ === 408) {
console.log(color("Conexão terminou, apenas ignore, irei reconectar...", "gray"))
return startSock()    
} else if(RECONECTAR_ === 400) {
return startSock()    
}
}
} catch (e) {
console.log(color(e, "red"))  
}

}

} 

conpdate()
