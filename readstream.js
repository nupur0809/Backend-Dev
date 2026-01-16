const fs = require("fs");

const readStream = fs.createReadStream("./log.txt");
const writeStream = fs.createWriteStream("./output.txt");

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("File copied successfully");
});
