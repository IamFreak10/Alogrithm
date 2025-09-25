 function insertionSort(arr,n){
    for(let i=1;i<n;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
        console.log("Key:",key,"J:",j,"Pass",i,":",arr);
    }
}


let a=[6,1,7,2,9,8,5,3];
insertionSort(a,8);
