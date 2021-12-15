const jsbarcode = require("jsbarcode");
const fs = require("fs");
const { createCanvas } = require("canvas");

const canvas = createCanvas();

jsbarcode(canvas, "33290.00115 11469.935305 19002.024362 1 88260000002000");

const buffer = canvas.toBuffer("image/png");

fs.writeFileSync("./image_by_canvas.png", buffer);

console.log("Imagem criada com sucesso");
