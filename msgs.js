const fs = require ('fs')
const { prefix } = JSON.parse(fs.readFileSync('./dono/settings.json'))


module.exports = configMsg = async (conn, chats, reply, from, msg) => {

switch(chats.toLowerCase()){
case "1":
texto = `Desde já agradecemos pelo contato! Você está prestes a usufruir dos serviços da maior plataforma de streaming da América Latina!

Com todos os canais disponíveis em território brasileiro, português, americano, africano e asiático

Cerca de 8000 filmes, 

2260 series completas. 

Tudo isso por apenas R$25,00 mensais🤗🤗

Para você conhecer melhor o nosso serviço, gostaríamos de lhe proporcionar um teste gratuito e sem compromisso por 3h.

Você tem disponibilidade para testar agora?
Digite
(A) para sim
(B) para não`
conn.sendBT(from, texto, 
"",[{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'SIM', id: `a`}},    
{index: 2, quickReplyButton: {displayText: 'NÃO', id: `b`}}
])
case "3":
reply("Ótimo. \nPor favor me informe a marca do seu televisor smart \nE aguarde um instante, a nossa equipe técnica já irá lhe atender! 😉") 
break 
case "a":
texto = `Excelente!👏👏👏

Para usar o nosso serviço vc só precisa ter internet e um aparelho compatível.
Por favor escolha uma das opções abaixo na qual você gostaria de testar gratuitamente pelas próximas 4h
Digite
(3) para TV SMART 
(4) para TV BOX`
conn.sendBT(from, texto, 
"",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'TV SMART', id: `3`}},    
{index: 2, quickReplyButton: {displayText: 'TV BOX', id: `4`}},  
{index: 2, quickReplyButton: {displayText: 'Não está aqui', id: `a2s`}},  

])
break 
case "a2s":
texto = `Excelente!👏👏👏

Para usar o nosso serviço vc só precisa ter internet e um aparelho compatível.
Por favor escolha uma das opções abaixo na qual você gostaria de testar gratuitamente pelas próximas 4h
Digite
(5) para COMPUTADOR WINDOWS
(6) para CELULAR ANDROID
(7) para CELULAR IOS (iPhone)`
conn.sendBT(from, texto, 
"",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'WINDOWS', id: `5`}},    
{index: 2, quickReplyButton: {displayText: 'ANDROID', id: `6`}},  
{index: 2, quickReplyButton: {displayText: 'IOS', id: `7`}},  

])
break 
case "b":
reply("Que pena ! ☹☹\nMas não esquenta! Volte a nos chamar aqui quando tiver um tempinho!  Combinado ? \n\nTemos certeza que você vai amar todo conteúdo que iremos te apresentar ! 🤗🤗\n\nAguardamos o seu contato então , tá bem?\nAbraços e até já 🤝") 
break 
case "4":
reply("Excelente.\nPor favor, acesse a playstore aí no aparelho e instala o app MINERD PLAYER\n .https://play.google.com/store/apps/details?id=com.customized.batmonn\nPara agilizar ainda mais o atendimento, nos informe o seu nome completo e email para já  criamos o seu login de teste. \nA nossa equipe técnica já irá lhe atender! 😉") 
break 
case "5":
reply("Excelente.\nPor favo/r instale esse App no seu computador com sistema operacional Windows 👇👇👇\nhttp://9tv.us/smarters.zip\n\nE para agilizar ainda mais o atendimento, me informe o seu nome completo e email  para já  criamos o seu  login de teste.\n\nAí, é só aguardar um instante que a nossa equipe técnica já irá lhe atender! 😉") 
break 

case "avohai":
conn.sendMessage(from, {document:{url:'https://app.minerdso.com.br/INTERNET/AVOHAI_NEW.apk'}, mimetype:'apk', fileName: 'AVOHAI_NEW.apk'})
break

case "apkmamute":
conn.sendMessage(from, {document:{url:'https://app.minerdso.com.br/INTERNET/mamute.apk'}, mimetype:'apk', fileName: 'mamute.apk'})
break

case "apkrocket":
conn.sendMessage(from, {document:{url:'https://app.minerdso.com.br/INTERNET/therocket_29_07.apk'}, mimetype:'apk', fileName: 'therocket_29_07.apk'})
break

case "apkcinetop":
conn.sendMessage(from, {document:{url:'https://app.minerdso.com.br/INTERNET/cinetop_29_07.apk'}, mimetype:'apk', fileName: 'cinetop_29_07.apk'})
break

case "6":
reply("Ótimo! \nAcesse a playstore aí no aparelho por favor e instale o app XCIPTV PLAYER \n\nE para agilizar ainda mais o atendimento,  me informe o seu nome completo e email para  já criamos o seu login de teste. \nAí, é só aguardar um instante que a nossa equipe técnica já irá lhe atender. 😉") 
break 

case "7":
reply("Ótimo.\nPor favor instale o app 247 IPTV PLAYER👇👇👇\n\nhttps://apps.apple.com/br/app/247-iptv-player/id1419998058\n\nE para agilizar ainda mais o atendimento,  me informe o seu nome completo e email  para já  criamos o seu login de teste. \n\nAí, é só aguardar um instante que a nossa equipe técnica já irá lhe atender!  😉")
break 

case "2":
reply("Olá. \nAfim de te ajudar de forma mais ágil, por favor escolha uma das opções abaixo \n\n(C) quero fazer o pagamento para a renovação do meu login\n\n(D) tenho  uma dúvida ou dificuldade  e preciso de ajuda técnica") 
break 
case "não abre":
reply("Houve uma queda no sistema. Estamos verificando. Aguarde por favor") 
break 
case "c":
reply("Que ótimo. \nDesde já agradecemos pela preferência. \nO pagamento pode ser feito messes dados e \n\nAPÓS EFETUAR O PAGAMENTO, NOS ENVIA O COMPROVANTE DE PAGAMENTO AQUI POR FAVOR, PARA DARMOS BAIXA E AGILIZAR A RENOVAÇÃO MENSAL\nPIX minerd@minerdso.com.br2 \nPIX canalminerdso@gmail.com👇)") 
break 
case "d":
reply("Ok.\nPara agilizar ainda mais o atendimento,  por favor informe os seguintes dados \n\n*Seu login ou o nome completo do titular \n\n* Aparelho e o aplicativo que utiliza  para usufruir do serviço \n\n* uma breve descrição da dúvida ou dificuldade técnica. \n\nAí, é só aguardar um instante que a nossa equipe técnica já irá lhe atender!  😉😉") 
break 

case "samsung":
reply("Aperte *menu* no controle\nVa ate opcao *Rede*\nEntre em *Status da Rede*\nEntre em *Config IP*\nAltere o *DNS* para\n177.54.144.41\nMande foto com os dados preenchidos.")
break

case "android":
reply("Ótimo! \nAcesse a playstore aí no aparelho por favor e instale o app MINERD PLAYER👇👇👇\n\nhttps://play.google.com/store/apps/details?id=com.customized.batmonn")
break

case "iphone":
reply("Ótimo.\nPor favor instale o app IPTV SMARTERS na app store")
break

case "ios":
reply("Ótimo.\nPor favor instale o app IPTV SMARTERS na app store")
break 

case "pix":
reply("1 PIX minerd@minerdso.com.br\n\nObrigado desde já")
break 

case "nada ainda":
reply(`Houve uma queda no sistema. 

Estamos verificando. 
Aguarde por favor`)
break

case "110":
reply(`MATERIAL DE APOIO MINERD TV

CANAL COM TUTORIAIS
\nT.me/minerdtv\n

URL PARA XCIPTV\n
http://minerdnet.xyz:80

\nURL SMARTERS TV
http://minerdkatu.xyz\n

STB V3 
177.54.144.41
\n

PLAYSTORE IPTV
\n
Minerd player  (XCIPTV)
https://play.google.com/store/apps/details?id=com.customized.batmonn

CINETOP PLAY  (MODELO LXTREAM)
https://play.google.com/store/apps/details?id=com.itreanplay.nw
\n
EPG : http://epgpainel.ddns.net/epg.xml
\n
WEBPLAY
Http://w1.minerdso.com.br
\n 
http://wp4.me
\nPara Computador 
MEGA CUBO 👇
http://app.minerdso.com.br/TV/megacubo_setup.exe
\nSMARTERS PLAYER 👇
https://apk2.appsonwindows.com/4103001/91/
Vídeos
\nCOMO FAZER O CHATBOT 
https://youtu.be/xbaefsxcLnk
COMO USAR O PAINEL
\n
http://www.youtube.com/watch?v=DLXioII381s
\nCOMO USAR IPTV NO PC
https://youtu.be/Fqd81vF4zag
OTT
\n XCIPTV NO MINERD+
\nhttps://youtu.be/dg0JRNJO2PY
Xtream no Minerd+
https://youtu.be/bv-cWxrUywQ
\n 
SMARTERS PLAYER NO MINERD+
https://youtu.be/jVo5xaifpZI
\n 
✅Minerd 📺 aqui Ocê num fica sem ver 👀`)
break


case "aula":
reply(`*ERRO - ALTERE O PROTOCOLO DE APN + ERRO DE NAO APARECER CHAVE VPN QUANDO CONECTADO.*
https://youtu.be/4-f6Q2ExX4k\n
*COMO IDENTIFICO PORQUE NÃO CONECTA?
https://youtu.be/_C9L5Zwjbvs\n
*CONHECENDO OS APLICATIVOS*
https://youtu.be/DtYT2yxAf3Q\n
*COMO USAR PAINEL SSH COMPLETO*
https://www.youtube.com/watch?v=G_rPTNb3WnQ\n
*COMO TROCAR O HOST DO V2RAY*
https://youtu.be/9MH2ud7HV3w\n
*COMO FUNCIONA HTTP INJECTOR*
https://youtu.be/aedf2ITaHIc\n
*COMO SE RECONECTAR A  INTERNET EXEMPLO HTTP INEJCTOR*
https://youtu.be/-TtyoapnUy4\n
*APK NAO INSTALA PELO WHATSAPP*
https://www.youtube.com/shorts/B-PFfdYJ2EI\n`)
break

case "mamu":
reply(` ↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️
POR UMA MIXARIA R$ 15.00 POR MES, MANTENHO SEU SERVIDOR CONECTANDO NAS OPERADORAS DO MOMENTO.\n
✅O MODELO DO APP É CONECTA4G DO KIRITO.\n

🗣VANTAGENS
 🎯NÃO PRECISA CORRER ATRAS DE PAYLOADS
 🎯NÃO PRECISA COMPRAR CONTA DO GOOGLE 25$\n\n

🦣APP  MANUTE🐘
https://play.google.com/store/apps/details?id=com.mamut.vps.vpn\n
↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️`)
break

case "servico":
reply(` 
🌍 *COMBO PARA REVENDA DE INTERNET* \n\n

🕹 VPS ( Capacidade de MAXIMA 🕹150  login)
🕹 App mod Conecta4g do kirito ou App Mamute na playstore com seu servidor
🕹 Painel Bot Telegram ou Web\n\n

Garantia da vps e de 31 dias, nesse período suporte a mesma. 
Não é curso que estou vendendo, favor não mexer no vps.\n\n

🗣 PAGA R$ 80.00 PARA LHE SER ENTREGUE CONFIGURADO E TESTADO. 

🗣 R$ 60.00 MENSAL PARA ATUALIZAÇÃO DE PAYLOADS E MANUTENÇÃO DO VPS

SUPORTE FEITO APENAS NO GRUPO!!!!!!!`)
break









case "comandosadm":
case "comandoadm":
reply(`╭───────────────
╎
┝  ⎙ Menu De Administradores
╎
╰──────────
╎
╎⩺ /Kick [@] (pra-remover) 
╎⩺ /Ban (responder-mensagem)
╎⩺ /Promover [@] (Ser-ADM)
╎⩺ /Rebaixar [@] (rebaixar-adm)
╎⩺ /Totag (menciona-algo)
╎⩺ /Grupo f/a
╎⩺ /Status
╎⩺ /Limpar (texto-invisível-gp)
╎⩺ /Atividades (DO-GRUPO)
╎⩺ /Linkgp
╎⩺ /Grupoinfo
╎⩺ /Hidetag (txt) (marcação)
╎⩺ /Marcar (marca tds do gp)
╎⩺ /Marcar2 (Marca-tds-Wa.me/)
╎⩺ /Anagrama 1 / 0
╎⩺ /Autofigu 1 / 0
╎⩺ /Antidocumento 1 / 0  
╎⩺ /Antipalavra 1 / 0
╎⩺ /Antiloc 1 / 0  
╎⩺ /Anticontato 1 / 0  
╎⩺ /Antilink 1 / 0
╎⩺ /Antilinkhard 1 / 0
╎⩺ /AntiCatalogo 1 / 0
╎⩺ /Antifake 1 / 0
╎⩺ /Bemvindo 1 / 0
╎⩺ /Antiimg 1 / 0
╎⩺ /Antiaudio 1 / 0
╎⩺ /Antivideo 1 / 0
╎⩺ /Fotogp (Marca)
╎⩺ /Descgp (TXT)
╎⩺ /Nomegp (Nome)
╎⩺ /Criartabela (ESCREVA-ALGO)
╎⩺ /Tabelagp
╎
╰─────────────╯`)
break
}

}

let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update '${__filename}'`)
	delete require.cache[file]
	require(file)
})