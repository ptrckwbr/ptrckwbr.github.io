/* ================================================================================
         _                                _       _   
        (_) __ ___   ____ _ ___  ___ _ __(_)_ __ | |_ 
        | |/ _` \ \ / / _` / __|/ __| '__| | '_ \| __|
        | | (_| |\ V / (_| \__ \ (__| |  | | |_) | |_ 
       _/ |\__,_| \_/ \__,_|___/\___|_|  |_| .__/ \__|
      |__/                                 |_|         

      Javascript - Generate Noisy Background

================================================================================ */
function noise() {
	var tileSize = 240;
	
	var cvs = document.createElement("canvas");
	cvs.height = tileSize;
	cvs.width = tileSize;
	document.body.appendChild(cvs);
	
	var ctx = cvs.getContext("2d");
	ctx.clearRect(0,0,cvs.width,cvs.height);
	
	for (var i=0; i<tileSize; i++) {
		for (var j=0; j<tileSize; j++) {
			var alpha = 0.04;
			var variance = Math.random() * 255 * alpha;
			
			var baseRGB = [255, 253, 250];

			var r = Math.max(Math.min(baseRGB[0] - variance, 255),0);
			var g = Math.max(Math.min(baseRGB[1] - variance, 255),0);
			var b = Math.max(Math.min(baseRGB[2] - variance, 255),0);
			
			ctx.fillStyle = "rgb("+r+","+g+","+b+")";
			ctx.fillRect(i,j,1,1);
		}
	}
	
	var png = document.createElement("img");
	png.src = cvs.toDataURL("image/png");
	cvs.remove();
	
	var img = "url("+png.src+")";
	document.body.style.backgroundImage = img;
}
