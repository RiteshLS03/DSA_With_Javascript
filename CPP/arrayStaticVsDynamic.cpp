#include <stdio.h>
#include <cstdlib>

int main()
{
    int arr[10] = {2, 4, 6, 8, 10};

    int *p;
    p = (int *)malloc(5 * sizeof(int));
    p[0] = 3;
    p[1] = 5;
    p[2] = 7;
    p[3] = 9;
    p[4] = 11;

    for (int j = 0; j < 10; j++)
    {
        printf("%d ", j[arr]);
    };

    printf("\n");

    for (int k = 0; k < 10; k++)
    {
        printf("%d ", k[p]);
    };

    return 0;
}