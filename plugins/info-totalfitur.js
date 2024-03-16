
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
let txt = `*❍  B O T  -  F E A T U R E*\n\n`
      txt += `	◦  *Total* : ${totalf}\n`
      txt += '2021-2024 Cpm_Jhon MD'
   await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: totalf * 1000,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: txt,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['totalfitur']
handler.tags = ['main','info']
handler.command = /^(feature|totalfitur)$/i
export default handler
