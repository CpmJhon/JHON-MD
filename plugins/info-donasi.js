let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let text = `
┌─「 Donasi 」
│• Dana: 085591916436
❏───────────
BY ® Jhon-2024
`;
	const templateButtons = [
		{ index: 1, urlButton: { displayText: "✨ Saweria", url: psaweria } },
		{ index: 2, urlButton: { displayText: "📷 Instagram", url: sig } },
		{ index: 3, urlButton: { displayText: "🌎 Official Group", url: sgc } },
		{ index: 4, quickReplyButton: { displayText: "Menu", id: ".menu" } },
		{ index: 5, quickReplyButton: { displayText: "Owner", id: ".owner" } },
	];
	let tm = {
		text: text,
		footer: global.wm,
		templateButtons: templateButtons,
		image: { url: thumb },
	};
	conn.sendMessage(m.chat, text, m);
};
handler.command = /^(donasi|dns)$/i;
handler.tags = ["info"];
handler.help = ["donasi"];
handler.premium = false;
handler.limit = false;

export default handler;
