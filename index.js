const fs = require("fs");
const { buffer } = require("stream/consumers");
console.log("READ DATA");
// fs.readFile('inpu.txt', function (err, data) {
//     if (err) {
//         console.log("Error", err);
//         return err
//     }
//     console.log('Data: ', data.toString());
//     console.log('READ END');
//     return data
// })

// var data = fs.readFileSync('inpu.txt');
// console.log('Data: ', data.toString());
// console.log('READ END');
// console.log('OTHER STUFF');

//READ > Open + read

// const buf = new buffer(1024)

// fs.open('inpu.txt', 'r+', function (err, fd) {
//     if (err) {
//         console.log('Error in opening file', err);
//     }
//     console.log('File Open Successfully');

//     fs.read(fd, buf, 0, buf.lenth, 0, function (err, data) {
//         if (err) {
//             console.log('Error in reding file', err);
//         }
//         console.log('Data: ', data);
//     })
// })

// fs.writeFile('inpu.txt', 'PwSkill', function (err) {
//     if (err) {
//         console.log('Error', err);
//     }
//     console.log('Success in Writing File');
// })

fs.appendFile(
  "inpu.txt",
  "--VipulPWSkill Do you Know About it",
  "utf8",
  function (err) {
    if (err) {
      console.log("Error in Appending File", err);
    } else {
      console.log("Success to Append text in the file");
    }
  }
);
