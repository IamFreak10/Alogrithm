def insertion_sort(arr):
    print("Initial array:", arr)
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        print(f"\nInserting {key} at position {i}")
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
            print("Shift:", arr)
        arr[j+1] = key
        print("Array after inserting key:", arr)
    print("\nSorted array:", arr)

arr = [5, 2, 4, 6, 1, 3]
insertion_sort(arr)
