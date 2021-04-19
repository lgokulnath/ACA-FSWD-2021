#include<bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        char str[101];
        cin>>str;
        int i;
        int flag1=0;
        int flag2=0;
        int n=strlen(str);
        for(i=0; i<n-1; i++)
        {
            if(str[i]=='1' && str[i+1]=='1')
                flag1=1;
            if(str[i]=='0' && str[i+1]=='0' && flag1)
                flag2=1;
        }
        if(flag1 && flag2)
            cout<<"NO\n";
        else    
            cout<<"YES\n";
    }
}