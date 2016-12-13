function medalbot() {
	console.log('go');
	c='country_name';$.get("www.medalbot.com/api/v1/medals",a=>alert(a[0][c]+'\n'+a[1][c]+'\n'+a[2][c]))
	//c='country_name';$.get("www.medalbot.com/api/v1/medals",a=>alert(a.map((i) => i[c]+'\n')))
}
