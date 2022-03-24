function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let tmp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = tmp;
    }
}
const arr = [1, 34, 45, 67, 78, 34, 12, 123];
selectionSort(arr);
console.log('arr = ', arr);