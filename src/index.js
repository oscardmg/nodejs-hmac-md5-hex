const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter key: ', (key) => {
  rl.question('Enter data: ', (data) => {
    const hash = crypto.createHmac('md5', key).update(data).digest('hex');
    console.log(`HMAC MD5: ${hash}`);
    rl.close();
  });
});
