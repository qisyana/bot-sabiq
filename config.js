global.DeveloperMode = 'false' //true Or false
global.linkGC = ['Tidak Ada']
global.channelYT = ['https://tinyurl.com/yjnjpsyv'] 
global.owner = ['6285804289247', '6285804289247', '6285804289247']// Put your number here
global.mods = ['6285804289247', '6285804289247', '6285804289247'] // Want some help?
global.prems = ['6285804289247'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  caliph: 'https://api.caliph71.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'a21ec307fc8cafb7',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'Ze3af6X1SjJeUebhHUZCsHMeH13',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://api.lolhuman.xyz': 'fe3912c1406cbe694ac3b09b',
  'https://api.caliph71.xyz': 'beta'
}

// Sticker WM
global.packname = '\n         Punya\n\n         SABIQ\n\n\n+6285804289247'
global.author = ''

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
