var alphabetWave = function() {
	for(var i = 0; i < 26; i++) {
		var s = "", x = 27;
		while(--x) {
			s += String.fromCharCode(((i+(x%2))%26)+65);
		}
		console.log(s);
	}
};

'use strict';

var alpahbetWave1 = function() {
	var s = "", i = -1;
	while(++i < 676) {
		if(i>0&&!(i%26)) s+="\n";
		s += String.fromCharCode((((i/26)+(i%2))%26)+65);
	}
	console.log(s);

};

var alpahbetWave2 = function() {
	//for(var s="",i=-1;++i<676;)i&&!(i%26)&&(s+="\n"),s+=String.fromCharCode((i/26+i%2)%26+65);alert(s);
	for(var s="",i=-1;++i<676;)i&&!(i%26)&&(s+="\n"),s+=String.fromCharCode((i/26+i%2)%26+65);alert(s);
};

var test = function() {
	for(var s="",i=-1;++i<676;)i>0&&!(i%26)&&(s+="\n"),s+=String.fromCharCode((i/26+i%2)%26+65);console.log(s);
}

//
