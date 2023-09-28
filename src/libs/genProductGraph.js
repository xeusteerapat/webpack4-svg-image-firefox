export const SVGToBase64 = (rawSVG) => {
  const url =
    'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(rawSVG)));
  const img = new Image();

  return new Promise((resolve, reject) => {
    let canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    img.src = url;
    const devicePixelRatio = 2;

    img.onload = () => {
      if (!canvas) {
        return reject();
      }

      canvas.width = img.width * devicePixelRatio;
      canvas.height = img.height * devicePixelRatio;

      console.log({
        imgW: img.width,
        imgH: img.height,
      });

      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL());
      canvas = null;
    };

    document.getElementById('app').appendChild(canvas);

    img.onerror = () => reject('error');
  });
};

export const generateProductGraph = async () => {
  try {
    const rawGraphSVG = await import(
      /* webpackChunkName: "b64image" */ `!svg-inline-loader!../../src/assets/images/star.svg`
    ).then((m) => m.default);
    return await SVGToBase64(rawGraphSVG);
  } catch (e) {
    return '';
  }
};
