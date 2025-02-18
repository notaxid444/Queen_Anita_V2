//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "916002605523";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0h0RnVxeTRQZFp6Y2UraEhETTNEZ2RKaExWZktkbFNxZGlSL1RKa1UzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGJ5WmRVMy9uZVZlM2VId2N2bnRDVlo1bXVMVXNudFhJekM3NlQ0NzQzWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSStCSGQrdlVuaU5RVzJKanphV1VhM2JLZk9UWWxMWmZ0bzdGd3B5Wm53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnVXNJdXltMWJZZ243Y3MzS2duaUxqbFpvdGR1TU03OGU5ZS9OQlR6Y2tZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllBK2pmdG15ZXlCWVpFWlZKRFJ5MWxmamZoYkg1bUZ1Tk5vR0N3WTVlR3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQZDA5TjlVbDBybDViYVErQ3RzS1NKNWlMMDRqTXlvTzFRY3dpamszV3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUUrK0xERC80REREWlpjd1FEVkZEbzNWQzJYakEwQ2FuUDRySWJ2SDdGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWs0K2loejZQQTlyaXNJRlNYUUlIY1BQSkI1SWlGWkpJL3ZvU083eTBGdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik16citTSUVpdjhLM0RURzRKUWN6ZGxSSXdLTkVvNW5QWU1kRFdhczcxWUE3TnJkazMweHFwNDk3eldTdFBvM2UyZzZWSmpkcVdCUGlNWlZ0RUNUYmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIyLCJhZHZTZWNyZXRLZXkiOiJJSGxZUDB6NXVhaTVWUlJSb2JzdXNMeWxydFJiZmM1cEFlcEhINWdYK1EwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlZjRna2hRV1NDZUtNN01ObDkzWnJnIiwicGhvbmVJZCI6IjgwYWFhYjUxLTFiMDMtNGUyNi04ODkzLTRmOWUzZjg0YTZhYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWNTVtWGgrR0VlY0RUcUROd1dMemZxN3RRZlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNJd00zT3FtdFE4M251TjlnZGl0ZGVlbm8wPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldCRU02WldLIiwibWUiOnsiaWQiOiI5MTYwMDI2MDU1MjM6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOGqSDwnZeh8J2XovCdl6fwnZeU8J2Xq/Cdl5zwnZeXIPCThqrjhaTjhaRcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbuOFpOOFpFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxu44Wk44WkXG5cblxuXG5cblxuXG5cbuOFpOOFpOOFpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0xhcytJRUVJR28vcndHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNjJuTXg2K1BXY0NyQ3RJVVlCNEIzcWVxNlQyN0xESTFpYVAxdzBaNWFsYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZFgzV0hzOHVoR1Ixd3BPZ2FQWEF3ZkNINjJOa1NIV09rWHlwczJJVEJpZXlBc0pzdmlNeU9ocXY5cUVLVWx0eXMvclYyczA4aXorWTlRUkRGaG0zQXc9PSIsImRldmljZVNpZ25hdHVyZSI6ImtFb3haM25KTWZzREg3WUhCMUtQa2NiRDc1NzE5L0VtN0ZodmZYOSt4c2RFQVI5akFlVXVsZkxNZHA2WkM0aGZUdDhCMnNyTFhIZ0NobmhBZXJyc2l3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2MDAyNjA1NTIzOjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmV0cHpNZXZqMW5BcXdyU0ZHQWVBZDZucXVrOXV5d3lOWW1qOWNOR2VXcFgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzg1MTE0MTB9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "NOTAXID",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
