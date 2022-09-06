const P = require("pino")
const fs = require('fs')
const fetch = require('node-fetch')
const { exec } = require('child_process');

qrcode = './session-md.json'


const { default: makeWASocket, generateWAMessageFromContent, DisconnectReason, AnyMessageContent, relayMessage, delay, useSingleFileAuthState, useMultiFileAuthState, makeInMemoryStore, fetchLatestBaileysVersion} = require('@adiwajshing/baileys')
const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) })
store.readFromFile('./baileys-md.json')
setInterval(() => {
	store.writeToFile('./baileys-md.json')
}, 10_000)
// start a connection
const startSock = async() => {
const { state, saveCreds } = await useMultiFileAuthState('./session-md.json')

    const { version, isLatest } = await fetchLatestBaileysVersion()
    const conn = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Skynerd Bot','Chrome','1.0.0'],
        auth: state,
        syncFullHistory: true,
        version
    })
    
    store.bind(conn.ev)

    conn.ev.on('messages.upsert', async m => {
//    if(m.type != 'notify')return
        const msg = m.messages[0]
        require('./main.js')(conn, msg, m)
        require('./main2.js')(conn, msg, m)
    })
    
conn.ev.on('group-participants.update', async m => {
require('./welcome.js')(conn, m)
})

    conn.ev.on('connection.update', (update) => {
    
        const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(connection === "open") { console.log(`BOT - CONECTADO COM SUCESSO..`)}
require("./dono/conect.js")(conn, connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications, qrcode, exec)
    })
    
    conn.ev.on('creds.update', async() => {
await saveCreds()
})
    
    conn.sendMessageFromContent = async(mess, obj, opt = {}) => {
    let prepare = await generateWAMessageFromContent(typeof mess == 'object' ? mess.key.remoteJid: mess, obj, opt)
    await conn.relayMessage(prepare.key.remoteJid, prepare.message, {
      messageId: prepare.key.id
    })
    return prepare
    }
    

    conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    conn.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    conn.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
    
    conn.sendText = async (jid, buffer, quoted = '', options) => {
        return await conn.sendMessage(jid, { text: buffer, ...options }, { quoted })
    }
    
    conn.sendBT = async (id, text1, desc1, but = [] , vr) => {
const content ={
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},
templateMessage: {
hydratedTemplate: {
hydratedContentText: text1,
hydratedFooterText: desc1,
hydratedButtons: but,
contextInfo: {}
}
}
}}}
conn.relayMessage(id, content, {messageId: require('@adiwajshing/baileys').generateMessageID(), additionalAttributes: { }},{ quoted: vr ? vr : null});
}

    

    return conn
}

startSock()


exports.startSock = startSock 

let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update '${__filename}'`)
	delete require.cache[file]
	require(file)
})