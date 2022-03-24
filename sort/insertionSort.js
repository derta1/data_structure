function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let insertVal = arr[i];
        let j = i;
        while(j - i >= 0 && arr[j - 1] > insertVal){
            arr[j] = arr[--j];
        }
        arr[j] = insertVal;
    }
}
const arr = [1,  45, 67, 78, 34, 12, 123];
insertionSort(arr);
console.log('arr = ', arr);