import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 ]

let { key } = await conn.sendMessage(m.chat, {text: '*Sabar Beb*'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
pengalihan isu
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://ik.imagekit.io/lui/2024-01-06_04_08_36__0000_UTC"},
      gifPlayback: true,
      caption: 'ʜᴀʟᴏ ᴋᴀᴋ. sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʟᴇʟɪᴀ ᴡʜᴀᴛsᴀᴘᴘ ᴏᴛᴏᴍᴀᴛɪs ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ sᴇsᴜᴀᴛᴜ,  ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴғᴏʀᴍᴀsɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛsᴀᴘᴘ.\n\nɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ sʏsᴛᴇᴍ ᴡʜᴀᴛsᴀᴘᴘ ʟᴇʟɪᴀ ʙᴏᴛ ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ sᴏᴍᴇᴛʜɪɴɢ. sᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ ɪɴғᴏʀᴍᴀsɪ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛsᴀᴘᴘ\n\n ➦ *.ᴀʟʟᴍᴇɴᴜ* (semua fitur)\n ➦ *.ᴍᴇɴᴜʟɪꜱᴛ* (Coming soon)',
      contextInfo: {
      externalAdReply: {
      title: `CPM-JHON`,
      body: global.author,
      thumbnailUrl: 'https://ik.imagekit.io/lui/2024-01-06_04_01_36__0000_UTC',
      sourceUrl: `https://whatsapp.com/channel/0029VaLiUSS5q08hPj5mcH0m`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(menu|helo|help)$/i;

export default handler;