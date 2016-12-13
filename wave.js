function wave() {

	var a=[12,240,1984,6336,24672,32799];
	var f = '', i;

	for(l = 0; l < 6; l++) {
		f='', i=16;
		while(i--) f += (a[l]&(1<<i)) ? '*' : ' ';
		console.log(f);
	}

};
