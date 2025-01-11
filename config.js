const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xqH7kKWNVVAyJeERW0kampqQABIhAQgoqn/Pcp+lLdD3PO9PCUSsjaK2utvX8CUuAaLVELRj9BWeELpKhb0rZEYAS0JopQBfoghBSCEeiZOp57xtIQItuuphyrIrWXqMd0MbTOZ91e79f3BXQiOt0/g0cflI2f4eA3gHysTCq32imewPTksneW2Uy9C1YyD5UGNcwk4ZWpVV6Tq/wMHh0ixBUm8aRMUI4qmC1Ru4G4+h79s67Gxd5x7blDWPvicW22STazrWISeSAlG81N3Hvqr65M/T36RixVL7UrS9kS6qWs5qJsyf5BgMzgkN6IvFWm6/PaYVrtnX6NY4LCeYgIxbT9tu75dCxoR306QZnIrSQ3qA0V71VdC2TRxbyWxbS9DKy5yQnfI+7OTbW6HzMUu15vonuRGCmUcwMvjgakJVqs6cJ8kp7SdPuV+Kb6yEr6f3Rvpyvb8TfCYUAu3Pni7Ka3hbYU/WnLRpG3z5LCtdBa80w2/R598Tq+vljlsFFe0o2/He/PmNwO3iz0B4u1x0CulGQ+MoVoUn/Sh7SpfsdSpYzF1WZ5kU69vNhdgm21WaYF1tdqlB+Qoe6YS7ZE+6mfiTtj3V401xWjk6Hdhtr8GqvGLcLL+3bOzYyXJC6lxHhJtfj59UUpauchGLGPPqhQjGtaQYoL0u1xIt8HMLzYKKgQfZUXaC3aKxvjkA/cBFmVX2srLTlyksbq9tIT/B6d8bLV2ybs8Rn0QVkVAaprFM5wTYuqNVFdwxjVYPTnX31A0I2+GdeV49k+iHBV0z1pyqyA4YerH4cwCIqGULslwbhboAqMmM9tRCkmcd3p2BBYBQm+oHECaQ1GEcxq9OiDEF1wgDo8YJnu309kHThjK7ugrXLwJYHfdpSTgrz9EvrSUEJD9kmBvPQk+PLwCfIM/xSFkIGCzEtyGII+wO890935pYXVPfJ2Eu83Fqbn7CY5S8TjmaL6wfzVhjftUYVCMKJVg/rAh0HalE6RIvIbXG95mh04sz4k83uQ1shh0XJl7XJd/Yr75ikY/fycU+Mi7PAUkT9uZMcBfZC/RhB3L+dEUWIFQWZ5Xh6x7B/1j2snJCzLHwTRDvdd9O5GiCjEWQ1GYLyyYQNjY2JKB7y6TqfqPlbHsQo+TfpI+1uamFVykdacHXBBvrlLeKH1sKmaETQsRYrvXhPyGW/c8PVWPP8LCBiBpsnnpFHq/DTJKilXWTvLzl4RINGyd6vF7Dhmq+oAWxk3C4fuyDaZF4myyu93Vp3Zlm3Z+n5wDK+n/XjX08Rya9RLbfvcVXsLy9dipC5Wg/11rYueQ2B6CPHKur4wh/2S2IujP/QPzIo/r3WJdWMv9ySnNPOonrbEZs5nX47p3Yvu7Vk+CX40UVJ7vae2dn3rw9c5kL3PX/zaIT/foxVh9DrOCOws+i9zvqacefS/YLwPyF8kSQvHgt+7hylZk8VJ7gl4GxUnVZ9xiXNBgsn5JBTDW3CsTQgej7/6oMwgjYoqByMASVgVuOuGDNZU/WxUB+eopjAvwYiV+KEo8wrD9EHeqmVpU0g/+huo3TeLY/D4B40DyfL7BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Kim Ju Yung",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Kim Ju Yung",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
 @@ -21,21 +21,21 @@ module.exports = { session: process.env.SESSION_ID || `BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xqH7kKWNVVAyJeERW0kampqQABIhAQgoqn/Pcp+lLdD3PO9PCUSsjaK2utvX8CUuAaLVELRj9BWeELpKhb0rZEYAS0JopQBfoghBSCEeiZOp57xtIQItuuphyrIrWXqMd0MbTOZ91e79f3BXQiOt0/g0cflI2f4eA3gHysTCq32imewPTksneW2Uy9C1YyD5UGNcwk4ZWpVV6Tq/wMHh0ixBUm8aRMUI4qmC1Ru4G4+h79s67Gxd5x7blDWPvicW22STazrWISeSAlG81N3Hvqr65M/T36RixVL7UrS9kS6qWs5qJsyf5BgMzgkN6IvFWm6/PaYVrtnX6NY4LCeYgIxbT9tu75dCxoR306QZnIrSQ3qA0V71VdC2TRxbyWxbS9DKy5yQnfI+7OTbW6HzMUu15vonuRGCmUcwMvjgakJVqs6cJ8kp7SdPuV+Kb6yEr6f3Rvpyvb8TfCYUAu3Pni7Ka3hbYU/WnLRpG3z5LCtdBa80w2/R598Tq+vljlsFFe0o2/He/PmNwO3iz0B4u1x0CulGQ+MoVoUn/Sh7SpfsdSpYzF1WZ5kU69vNhdgm21WaYF1tdqlB+Qoe6YS7ZE+6mfiTtj3V401xWjk6Hdhtr8GqvGLcLL+3bOzYyXJC6lxHhJtfj59UUpauchGLGPPqhQjGtaQYoL0u1xIt8HMLzYKKgQfZUXaC3aKxvjkA/cBFmVX2srLTlyksbq9tIT/B6d8bLV2ybs8Rn0QVkVAaprFM5wTYuqNVFdwxjVYPTnX31A0I2+GdeV49k+iHBV0z1pyqyA4YerH4cwCIqGULslwbhboAqMmM9tRCkmcd3p2BBYBQm+oHECaQ1GEcxq9OiDEF1wgDo8YJnu309kHThjK7ugrXLwJYHfdpSTgrz9EvrSUEJD9kmBvPQk+PLwCfIM/xSFkIGCzEtyGII+wO890935pYXVPfJ2Eu83Fqbn7CY5S8TjmaL6wfzVhjftUYVCMKJVg/rAh0HalE6RIvIbXG95mh04sz4k83uQ1shh0XJl7XJd/Yr75ikY/fycU+Mi7PAUkT9uZMcBfZC/RhB3L+dEUWIFQWZ5Xh6x7B/1j2snJCzLHwTRDvdd9O5GiCjEWQ1GYLyyYQNjY2JKB7y6TqfqPlbHsQo+TfpI+1uamFVykdacHXBBvrlLeKH1sKmaETQsRYrvXhPyGW/c8PVWPP8LCBiBpsnnpFHq/DTJKilXWTvLzl4RINGyd6vF7Dhmq+oAWxk3C4fuyDaZF4myyu93Vp3Zlm3Z+n5wDK+n/XjX08Rya9RLbfvcVXsLy9dipC5Wg/11rYueQ2B6CPHKur4wh/2S2IujP/QPzIo/r3WJdWMv9ySnNPOonrbEZs5nX47p3Yvu7Vk+CX40UVJ7vae2dn3rw9c5kL3PX/zaIT/foxVh9DrOCOws+i9zvqacefS/YLwPyF8kSQvHgt+7hylZk8VJ7gl4GxUnVZ9xiXNBgsn5JBTDW3CsTQgej7/6oMwgjYoqByMASVgVuOuGDNZU/WxUB+eopjAvwYiV+KEo8wrD9EHeqmVpU0g/+huo3TeLY/D4B40DyfL7BwAA'.         
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'yes',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",

};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
OWNER_NUMBER:process.env.OWNER_NUMBER ||`+255 714 481 338', 
