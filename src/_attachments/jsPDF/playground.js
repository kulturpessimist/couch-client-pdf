var printer = {
	_toDataUrl: function(url, callback, outputFormat){
		var img = new Image();
		img.crossOrigin = 'Anonymous';
		img.onload = function(){
			var canvas = document.createElement('CANVAS');
			var ctx = canvas.getContext('2d');
			var dataURL;
			canvas.height = this.height;
			canvas.width = this.width;
			ctx.drawImage(this, 0, 0);
			dataURL = canvas.toDataURL(outputFormat);
			callback(dataURL);
			canvas = null;
		};
		img.src = url;
	},
	//
	images: [],
	doc: null,
	//
	generate: function(){
		this.doc = new jsPDF('portrait', 'mm', 'a4');

		this.doc.addSVG('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><path d="M149.965,0.084l106.041,43.914l43.924,106.016l-43.924,106.016l-106.041,43.914l-106.041,-43.914l-43.924,-106.016l43.924,-106.016l106.041,-43.914l0,0Z" style="fill:#14addd;"/></svg>', 0, 0, 210, 297);
		//this.doc.addImage(this.images[0], 'png', 0, 0, 210, 297, undefined, 'none');

		this.doc.setTextColor(254, 0, 0);
		this.doc.text(20, 20, 'This PDF has a title, subject, author, keywords and a creator.');
		this.doc.text(20, 40, 'This PDF has a title, subject, author, keywords and a creator.');
		this.doc.text(20, 60, 'This PDF has a title, subject, author, keywords and a creator.');

		this.show('bloburi'); // datauristring bloburi
	},
	show: function(method){
		var pdfURI = this.doc.output(method);
		document.getElementsByTagName('iframe')[0].src = pdfURI;
	}
}
/*
 *
 * */
printer._toDataUrl('../images/300dpi-a4-3000.png', function(base64Img){
	printer.images.push(base64Img);
	printer.generate();
});


