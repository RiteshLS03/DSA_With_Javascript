#include <stdio.h>

int main()
{
    int arr[5] = {1, 2, 3, 4, 5}; // {1, 2, 3, 4, 5}
    int arr2[5] = {1, 2};         // {1, 2, 0, 0, 0}
    int arr3[5] = {0};            // {0, 0, 0, 0, 0}

    for (int i = 0; i < 5; i++)
    {
        // printf("%d", arr[i]);
        // printf("%d", i[arr]);
        printf("%d", *(arr));
    };
}