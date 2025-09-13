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
void insertionSort(int arr[], int n)
{
    for (int i = 1; i < n; i++)
    {
        int key = arr[i];
        int j = i - 1;

        // Shift elements greater than key
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        // when we run out of element in array,আবার জায়গায় বসাইয়া দিলাম আরকি
        arr[j + 1] = key;

        // Print array after each pass
        cout << "Key:" << key << " "<< "j:" << j<< " " << "Pass " << i << ": ";
        print_array(arr, n);
    }
}
int main()
{
    optimize();

    int arr[] = {6, 1, 7, 2, 9, 8, 5, 3};
    insertionSort(arr, 8);
    return 0;
}