import fs from 'fs'

let handler = async (m, { conn }) => {
	let krtu = `Thanks To :
• LELIA
• FARA
• ABIAN
• LINA
• DINAA
• JHON

Dan Semua Yang Berkontribusi 
Dalam Pengambangan Script Ini

Special Thanks To : Cpm_Jhon-CHAN >,<`;
	await conn.sendButton(m.chat, krtu, botdate, fotonya2, [['\nJosh','huuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: 'Jhon - MD',
                        body: wm,          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}
handler.help = ['thankstoo']
handler.tags = ['info']
handler.command = /^(thankstoo|thanksto|credits|tqto)$/i;
handler.group = false;

export default handler;
