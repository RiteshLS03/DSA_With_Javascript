#include <iostream>
using namespace std;

int main()
{

    int t;
    cin >> t;

    while (t--)
    {
        string s;
        cin >> s;

        int badPairsCount = 0;

        for (int i = 1; i < s.length(); i++)
        {
            if (s[i] == s[i - 1])
            {
                badPairsCount += 1;
            }
        }

        cout << (badPairsCount <= 2 ? "YES\n" : "NO\n");
    }

    return 0;
}