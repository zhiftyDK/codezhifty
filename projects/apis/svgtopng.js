function svgToPng(svgId, pngName) {
    const svgElement = document.getElementById(svgId);
    let {width, height} = svgElement.getBBox(); 
    let clonedSvgElement = svgElement.cloneNode(true);
    let outerHTML = clonedSvgElement.outerHTML,
    blob = new Blob([outerHTML],{type:'image/svg+xml;charset=utf-8'});
    let URL = window.URL || window.webkitURL || window;
    let blobURL = URL.createObjectURL(blob);
    let image = new Image();
    image.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        let context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, width, height );
        let png = canvas.toDataURL();
        const link = document.createElement('a');
        link.download = pngName;
        link.style.opacity = "0";
        document.body.append(link);
        link.href = png;
        link.click();
        link.remove();
    };
    image.src = blobURL;
}