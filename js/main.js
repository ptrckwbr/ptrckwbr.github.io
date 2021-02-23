/* ================================================================================
         _                                _       _   
        (_) __ ___   ____ _ ___  ___ _ __(_)_ __ | |_ 
        | |/ _` \ \ / / _` / __|/ __| '__| | '_ \| __|
        | | (_| |\ V / (_| \__ \ (__| |  | | |_) | |_ 
       _/ |\__,_| \_/ \__,_|___/\___|_|  |_| .__/ \__|
      |__/                                 |_|         

      Javascript - Main Execution Function

================================================================================ */
window.onload = function() {
	// ----- Email Protection ----- //
	console.log("Action: Replacing empty link with email address.")
	var links = document.getElementsByClassName("encoded");

	for (var i = 0; i < links.length; i++) {
		var encoded = "20c2dvcnp1Om5rcnJ1QHZnenhvaXFja2hreC5pdXM/eWFocGtpej1bQ0tIXSUyMFhrZ2lub3RtJTIwVWF6";
		var decoded = decode(encoded);

		links[i].href = decoded;
	}

	// ----- Noisy Background ----- //
	noise();
}
