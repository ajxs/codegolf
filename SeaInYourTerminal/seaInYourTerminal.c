/*
#include <stdio.h>
int main() {
	int x=0,l,i,a[6]={32799,24672,6336,1984,240,12};
	while(l=6,++x) {
		printf("\033[2J");
		while(i=128,l--) {
			while(i--) putchar(a[l]&1<<(i+x)%16 ? 42 :32);
			puts("");
		}
		sleep(1);
	}
}
*/
int main(){int x=0,l,i,a[6]={32799,24672,6336,1984,240,12};for(;l=6,++x;){printf("\033[2J");for(;i=128,l--;){for(;i--;)putchar(a[l]&1<<(i+x)%16?42:32);puts("");}sleep(1);}}
