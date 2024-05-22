// Importing the Wechaty npm package
import {
  Wechaty,
  WechatyBuilder,
  Contact,
  Message,
  ScanStatus,
  log,
} from "wechaty";
import { PuppetPadlocal } from "wechaty-puppet-padlocal";

export function createBot(): Wechaty {
  const token: string = "puppet_padlocal_f648f9b7da18443caf86149afec99a57";
  const puppet = new PuppetPadlocal({
    token,
  });

  return WechatyBuilder.build({
    name: "chatgpt-bot",
    puppet,
  });
}

// Initializing the bot
export const bot = createBot();

// Keep the conversation state
export const initState: Array<ChatCompletionRequestMessage> = new Array({
  role: "system",
  content: "You are a helpful assistant.",
});

bot.on("scan", (qrcode, status) =>{
  console.log('[ 二维码 ] >', qrcode)
  // console.log(
  //   `Scan QR Code to login: ${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
  //     qrcode
  //   )}`
  // )
});
bot.on("login", (user) => console.log(`User ${user} logined`));
bot.on("logout", (user) => console.log(`User ${user} logout`));
bot.on("message", (message) => console.log(`Message: ${message}`));
bot.on("friendship", (user) => console.log(`User ${user} friendship`));

bot
  .start()
  .then(() => log.info("StarterBot", "Starter Bot Started."))
  .catch((e) => log.error("StarterBot", e));

bot
  .ready()
  .then(() => log.info("StarterBot", "Starter Bot Ready."))
  .catch((e) => log.error("StarterBot", e));

// const WECHATY_PUPPET_PADCHAT_TOKEN = "puppet_padlocal_f648f9b7da18443caf86149afec99a57";

// const puppet = "wechaty-puppet-padchat"; // 使用ipad 的方式接入。

// const puppetOptions = {
//   token: WECHATY_PUPPET_PADCHAT_TOKEN,
// };

// const bot = new Wechaty({
//   puppet,
//   puppetOptions,
// });

// console.log('[ bot ] >', bot)
// // 设置完成

// // 运行 wechaty
// bot
//   .on("scan", (qrcode, status) =>
//     console.log(
//       `Scan QR Code to login: ${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
//         qrcode
//       )}`
//     )
//   )
//   .on("login", (user) => console.log(`User ${user} logined`))
//   .on("message", (message) => console.log(`Message: ${message}`))
//   .start();
