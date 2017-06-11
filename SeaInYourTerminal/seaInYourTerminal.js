/*x=0;
setInterval((l=6) => {
	console.clear();
	while(f='',i=128,++x,l--) {
		while(i--) f+=([32799,24672,6336,1984,240,12][l]&1<<(i+x)%16 ? '*':' ');
		console.log(f);
	}},100);
*/

x=0,c=console;setInterval(a=>{for(c.clear();f="",i=128,++x,a--;c.log(f))for(;i--;)f+=" *"[[32799,24672,6336,1984,240,12][a]>>(i+x)%16&1]},100,6);
