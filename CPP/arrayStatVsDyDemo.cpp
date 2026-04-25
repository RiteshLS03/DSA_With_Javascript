#include <stdio.h>
#include <cstdlib>

int main()
{
    int *p;
    int *q;

    p = (int *)malloc(5 * sizeof(int));
    p[0] = 5;
    p[1] = 10;
    p[2] = 15;
    p[3] = 35;
    p[4] = 55;

    
    for (int j = 0; j < 5; j++)
    {
        printf("%d", j[p], "\n");
    }

    return 00;
}