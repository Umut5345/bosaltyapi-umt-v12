const client = global.client;
module.exports = () => {
  console.log("Bot başarıyla aktif oldu!");
  client.user.setActivity("umt#0001 Tarafından Kodlanmıştır. - discord.gg/dbc"); //Botunuzun Durum Ksımında Yazıcak Yazı.
}
module.exports.configuration = {
  name: "ready"
}
