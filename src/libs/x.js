var xmlSource =
  '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 54.4 54.4"><g><circle cx="27.2" cy="27.2" r="21.2" stroke-width="3" stroke="#606060" style="fill: rgb(189, 189, 189);"/><text dx="26" dy="34" text-anchor="middle" style="font-size:18px; fill: #000000; font-family: Arial, Verdana; font-weight: bold">90</text></g></svg>';
function callback(dataURI) {
  var img = new Image();
  img.src = dataURI;
  document.body.appendChild(img);
  console.log(dataURI);
}
var imageWidth = (imageHeight = 45);
var image = new Image();

image.onload = function (imageWidth, imageHeight) {
  var canvas = document.createElement('canvas');
  canvas.width = imageWidth;
  canvas.height = imageHeight;

  var context = canvas.getContext('2d', { preserveDrawingBuffer: true });
  context.drawImage(image, 0, 0, imageWidth, imageHeight);

  var dataURL;
  dataURL = canvas.toDataURL('image/png');

  callback(dataURL);
}.bind(this, imageWidth, imageHeight);

image.onerror = image.onabort = function () {
  console.error('generateIcon : error on image');
};

image.src =
  'data:image/svg+xml;base64,' +
  btoa(
    encodeURIComponent(xmlSource).replace(
      /%([0-9A-F]{2})/g,
      function (match, p1) {
        return String.fromCharCode('0x' + p1);
      }
    )
  );
