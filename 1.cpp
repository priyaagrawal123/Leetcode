// 605. Can Place Flowers:

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

#include <bits/stdc++.h>
using namespace std;

int main()
{
    int flowerbed[]={1,0,0,0,1};
    int n=1;
    int size=sizeof(flowerbed)/sizeof(flowerbed[0]);
    cout<<size<<endl;

    int i;
    for(i=0;i<size;i++)
    {
        if(flowerbed[i]==0)
        {
            bool left=(i==0)||(flowerbed[i-1]==0);
            bool right=(i==size-1)||(flowerbed[i+1]==0);
            if(left && right)
            {
                flowerbed[i]=1;
                n--;
            }
        }
    }
    if(n<=0)
    {
        cout<<"true"<<endl;

    }
    else{
        cout<<"false"<<endl;
    }
}