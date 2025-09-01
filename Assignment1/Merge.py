def merge_sort(arr, depth=0):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        print("  " * depth + f"Split: {arr} -> {L} & {R}")

        merge_sort(L, depth+1)
        merge_sort(R, depth+1)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

        print("  " * depth + f"Merged: {arr}")

arr = [5, 2, 4, 6, 1, 3]
print("Merge Sort Simulation:\n")
merge_sort(arr)
print("\nSorted array:", arr)
