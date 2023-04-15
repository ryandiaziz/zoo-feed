const fs = require("fs");

const checkFileUpdate = (data, req) => {
  if (data) {
    let fileName = data.dataValues.imageUrl;
    if (fileName) {
      const split = fileName.split("/");
      fileName = split[split.length - 1];
      if (fileName !== "portrait-placeholder.png") {
        fs.unlinkSync(`./public/images/${fileName}`);
      }
    }
  } else {
    const fileName = req.file.filename;
    fs.unlinkSync(`./public/images/${fileName}`);
  }
};

const checkFileDelete = (data) => {
  if (data) {
    let fileName = data.dataValues.imageUrl;
    if (fileName) {
      const split = fileName.split("/");
      fileName = split[split.length - 1];
      if (fileName !== "portrait-placeholder.png") {
        fs.unlinkSync(`./public/images/${fileName}`);
      }
    }
  }
};

const checkData = (req) => {
    const fileName = req.file.filename;
        fs.unlinkSync(`./public/images/${fileName}`);
}

module.exports = { checkFileUpdate, checkFileDelete, checkData };
