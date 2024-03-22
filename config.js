const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="colombo,sri lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://asanka:#063893B5BF667E39D@cluster0.eet78jt.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/4d15b3fd76b029bc9094d.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94778963451" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94778963451";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_35_03_20_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNkR3OGRuU2Q0RFdZcjZUaVZKaHV6ODdCZ05DbWVMMXFYWDgwQWdFMkxFRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlN5cGFGMEg0d092aEgxVVYwbENqbkJoKzh5RWRRQkdiYmoxenp5S001UlE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUU4zd0VzdE1MbHMxU2xjVmtHOE1IREhEaXdJMTNuUHJMWWVjcjlWU0JsOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkd4VHVFeTlHK0dnSjhjbVdkaDUzZy9zMjJKYVdxcFU4Unl1ZU15UDFxRDg9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNE9rM01TTlM1NENSWkQvdHpmNEozWnZaZ1AyR0Zlcm82SHBQRFFJY2lYYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIitlRHB3Y1pWZkVRM1dOTzBpcE50MzJJbDhQaSt2TW9RM3hhRTNMeVp1Vzg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5T0RlVDVWWm5LRzYrbVhLWEh2Rk85NG1TUlZrSUFocHEybmMvN3BzSFZnPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU2dnMkJDQngvdFFNQVd2azMwT3ljVTFCZ0JRZ0t6N2gxMDFuOFVyajhBMD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJnZ25WZXFVK0EvQ2VMMUNVdDlaZDNKUkhNYVp4cmZCUTFMcjgvRG9reDUwbzFxODFmbTBscWZtQVo4dG91cnp4d2JHRXVLdkVBUzREblMxMkNoTTRodz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTk2LFwiYWR2U2VjcmV0S2V5XCI6XCJRR2RLRGZBNncxSlRKT2pNRWlaV2JlMXJybWxaN2VwTFdwVXRvemo4YmxNPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTQ3Nzg5NjM0NTFAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiRjYyOEU0MEY3MTkxQjM0MjdGNjk3NDlGOTFCNzU4RkJcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMDk0MTcwOH1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIlhtV2xWbFFxUjJTN3ZYejVNeTIwQWdcIixcInBob25lSWRcIjpcIjY5ODUzYmRjLTRjNzEtNDgyOC1hMWNhLWQ3NDQ3NjBmNmRiNlwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQVBPbnJxU1F1Sld1TzBUVUF3YnZxUjdzK0pFPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkNzbmdnVFJLNHBjYTdMNkFOaTU2c0NmSFJ2ND1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJUWEtFUkZFU1wiLFwibWVcIjp7XCJpZFwiOlwiOTQ3Nzg5NjM0NTE6MjNAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjUyMDQ2MjQ2NzIzNjAxOjIzQGxpZFwiLFwibmFtZVwiOlwiQeKdpO+4j1wifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUG0vdjhZREVJYk02NjhHR0FJZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImFhU0R5aGR0TStUMXBOV0IyaWFKVm9tYnYrV1FVRVphajBvOEZ2MWdVZ0U9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJ6VUtxT1FsRlhZRnBER0wyVVY3akl6Tm5MUGJ0REdWQk11NlIyL1UxZG5OaUx5SzFxU3paWlpjTGxtVlNBcTZrVkZBZnRXSnFuWGlyaGhnYzhxekJDUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInd2c0lWQ2ZRdkFWaEhZdWhZb3lLVUNKY0tKTVRSZzNDdFRMMklOT21EUy9UcXVvTWZWYU1jM0c1VFg0Mzl5c1BFbnYvR2N2dmRUbEdVelZ0cTBPNGd3PT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5NDc3ODk2MzQ1MToyM0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJXbWtnOG9YYlRQazlhVFZnZG9taVZhSm03L2xrRkJHV285S1BCYjlZRklCXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDk0MTcwNyxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFJbHJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJbHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFYlNEQ0hrSHFXYVpHZFFmRTdpcTlMZEl2WXZsWGljd1BYWm9pSk1BR1FRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk1MzE0NzM4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEwOTQwMzc2NDU1XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©Asanka²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Asanka",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ASANKA-MD",
  ownername:process.env.OWNER_NAME|| "Asanka",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
