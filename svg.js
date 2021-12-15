const { DOMImplementation, XMLSerializer } = require("xmldom");
const jsbarcode = require("jsbarcode");

const xmlSerializer = new XMLSerializer();
const document = new DOMImplementation().createDocument(
  "http://www.w3.org/1999/xhtml",
  "html",
  null
);
const svgNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");

const barcode = "33290.00115 11469.935305 19002.024362 1 88260000002000";

jsbarcode(svgNode, barcode, {
  xmlDocument: document,
});

const svgText = xmlSerializer.serializeToString(svgNode);

const buffer = Buffer.from(svgText);

console.log(svgText);

const sharp = require("sharp");

sharp(buffer)
  .png()
  .toFile("image_by_svg.png")
  .then(function (info) {
    console.log(info);
  })
  .catch(function (err) {
    console.log(err);
  });
