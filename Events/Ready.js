const client = global.client;
module.exports = () => {
  console.log("Bot başarıyla aktif oldu!");
  client.user.setActivity("BotClub ❤ umt`#1000"); //Botunuzun Durum Ksımında Yazıcak Yazı.
}
module.exports.configuration = {
  name: "ready"
}