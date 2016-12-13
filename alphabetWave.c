#include <stdio.h>

main(){for(int i=-1;++i<676;)!(i%26)&&(putchar('\n')),putchar((i/26+i%2)%26+65);}
