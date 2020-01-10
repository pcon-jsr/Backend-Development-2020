//console.log("Hello World!")
// const os = require('os');
// console.log("Total Memory : "+ os.totalmem()/(1024*1024*1024));
// console.log(os.arch());
// console.log("Free Memory : "+ os.freemem()/(1024*1024*1024));


const fs = require('fs');
fs.rename('./tmp/hello', './tmp/world', (err) => {
    if (err) throw err;
    console.log('renamed complete');
  });