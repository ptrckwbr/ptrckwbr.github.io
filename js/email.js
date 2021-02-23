/* ================================================================================
         _                                _       _   
        (_) __ ___   ____ _ ___  ___ _ __(_)_ __ | |_ 
        | |/ _` \ \ / / _` / __|/ __| '__| | '_ \| __|
        | | (_| |\ V / (_| \__ \ (__| |  | | |_) | |_ 
       _/ |\__,_| \_/ \__,_|___/\___|_|  |_| .__/ \__|
      |__/                                 |_|         

      Javascript - Email Obfuscation Code

================================================================================ */
function encode(address, shift) {
	// ceasar cipher
	var encodedAddress = "";
	for (var i=0; i<address.length; i++) {
		var charCode = address.charCodeAt(i);
		
		var charCodeStartLower = 65;
		var charCodeStartUpper = 97;
		
		if ((charCode >= charCodeStartLower) && (charCode <= charCodeStartLower+26-1)) {
			temp = charCode - charCodeStartLower;
		} else if ((charCode >= charCodeStartUpper) && (charCode <= charCodeStartUpper+26-1)) {
			temp = charCode - charCodeStartUpper;
		}
			
		temp = mod(temp + shift,26);
		
		if ((charCode >= charCodeStartLower) && (charCode <= charCodeStartLower+26-1)) {
			charCode = temp + charCodeStartLower;
		} else if ((charCode >= charCodeStartUpper) && (charCode <= charCodeStartUpper+26-1)) {
			charCode = temp + charCodeStartUpper;
		}
		
		encodedAddress = encodedAddress + String.fromCharCode(charCode);
	}
	
	// base64
	var address = btoa(encodedAddress);
	
	// key
	address = String(shift.toString(16)) + address;

	return address;
}

function decode(address) {
	// get key
	var shift = parseInt(address.substr(0,2),16);
	var address = address.substr(2,address.length-2);
	
	// base64
	var address = atob(address);
	
	// ceasar cipher
	var decodedAddress = "";
	var temp = 0;
	for (var i=0; i<address.length; i++) {
		var charCode = address.charCodeAt(i);
		
		var charCodeStartLower = 65;
		var charCodeStartUpper = 97;
		
		if ((charCode >= charCodeStartLower) && (charCode <= charCodeStartLower+26-1)) {
			temp = charCode - charCodeStartLower;
		} else if ((charCode >= charCodeStartUpper) && (charCode <= charCodeStartUpper+26-1)) {
			temp = charCode - charCodeStartUpper;
		}
		
		temp = mod(temp - shift,26);
		
		if ((charCode >= charCodeStartLower) && (charCode <= charCodeStartLower+26-1)) {
			charCode = temp + charCodeStartLower;
		} else if ((charCode >= charCodeStartUpper) && (charCode <= charCodeStartUpper+26-1)) {
			charCode = temp + charCodeStartUpper;
		}
		
		decodedAddress = decodedAddress + String.fromCharCode(charCode);
	}
	
	var address = decodedAddress;
	
	return address;
}

function mod(n,p) {
	if (n < 0) {
		n = p - Math.abs(n) % p;
	}

	return n % p;
}
