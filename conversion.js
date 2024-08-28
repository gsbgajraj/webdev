const fs = require('fs');
const { PDFDocument, rgb, degrees } = require('pdf-lib');
const html2canvas = require('html2canvas');

// Function to convert JPG to PNG
async function jpgToPng(inputFilePath, outputFilePath) {
  const canvas = await html2canvas(document.querySelector(`img[src='${inputFilePath}']`));
  const dataUrl = canvas.toDataURL();
  const base64Image = dataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync(outputFilePath, base64Image, 'base64');
}

// Function to convert JPG to PDF
async function jpgToPdf(inputFilePath, outputFilePath) {
  const jpgImage = fs.readFileSync(inputFilePath);
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([jpgImage.width, jpgImage.height]);
  const jpgImageBytes = await pdfDoc.embedJpg(jpgImage);
  page.drawImage(jpgImageBytes, {
    x: 0,
    y: 0,
    width: jpgImage.width,
    height: jpgImage.height,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputFilePath, pdfBytes);
}

// Call the functions
const jpgFilePath = 'path/to/your/image.jpg';
const pngFilePath = 'path/to/your/image.png';
const pdfFilePath = 'path/to/your/image.pdf';

jpgToPng(jpgFilePath, pngFilePath)
  .then(() => console.log('JPG to PNG conversion completed successfully!'))
  .catch((error) => console.error('Error converting JPG to PNG:', error));

jpgToPdf(jpgFilePath, pdfFilePath)
  .then(() => console.log('JPG to PDF conversion completed successfully!'))
  .catch((error) => console.error('Error converting JPG to PDF:', error));
