let defuse=(w,o,c=x=>w.filter(i=>i==x).length,q="lastIndexOf",r=c('R'),y=c('Y'),u=c('U'))=>[,,,
	()=>!r?2:w[2]=='W'?3:u>1?w[q]('U')+1:3,
	()=>r>1&&o?w[q]('R')+1:w[3]=='Y'&&!r?1:u==1?1:y>1?4:2,
	()=>w[4]=='B'&&o?4:r==1&&y>1?1:!c('B')?2:1,
	()=>!y&&o?3:y==1&&c('W')>1?4:!r?6:4
][w.length]();
