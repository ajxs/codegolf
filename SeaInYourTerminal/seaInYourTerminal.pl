perl -MTime::HiRes=sleep -E '@a=(12288,3840,992,792,1542,63489);for$b(@a){$a="";$a.=$b&2**$_?"*":" "for 0..15;$b=$a}$_=$_ x 5 for@a;while(1){say"\e[H",join"\n",@a;$_=chop($_).$_ for@a;sleep 0.1}'
