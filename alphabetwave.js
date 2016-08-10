var alphabetWave = function() {
	for(var i = 0; i < 26; i++) {
		var s = "", x = 27;
		while(x--) s += String.fromCharCode(65+(i%26)+(x%2));
		console.log(s);
	}
};
