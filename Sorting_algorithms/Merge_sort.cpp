#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef vector<int> vi;
#define optimize()                \
    ios_base::sync_with_stdio(0); \
    cin.tie(0);                   \
    cout.tie(0);

void print_array(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}
void merge(int arr[], int l, int m, int r)
{
    int n1=m-l+1;
    int n2=r-m;

    // temp arrays
    int L[n1], R[n2];
    for(int i=0;i<n1;i++)
    {
        L[i]=arr[l+i];
    }
    for(int i=0;i<n2;i++)
    {
        R[i]=arr[m+1+i];
    }
}
void merge_sort(int arr[], int l, int r,int n)
{
    if(n<=1)
    {
        return;
        // base case
    }

    int m = (l+r)/2;
    merge_sort(arr, l, m, n/2);
    merge_sort(arr, m+1, r, n/2);
    merge(arr, l, m, r);
    cout<<"After Merging ("<<l<<" , "<<r<<") : ";print_array(arr,n);

}
int main()
{
    optimize();
    int arr[] = {8, 2,5,3,4,7,6,1};
    // n-1=7,n=8
    merge_sort(arr, 0, 7,8); 
    return 0;
}