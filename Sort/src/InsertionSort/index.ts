import Sorter from "../Sorter";

export default class InsertionSort<T> implements Sorter<T>{
    private comparator?: (o1: T, o2: T) => number;
    sort(values: T[], comparator?: ((o1: T, o2: T) => number) | undefined): void {
        this.comparator = comparator;   
        this.insertionSort(values)
    }
    private insertionSort(arr:T[]){
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i]
            let j = i - 1;
            while (j >= 0 && this.compare(key, arr[j] ) < 0 ) {
              arr[j + 1] = arr[j];
              j--;
            }
            arr[j + 1] = key;
          }
          return arr;
    }
    private compare(o1:T, o2:T) : number
    {
        if(this.comparator){
            return this.comparator(o1,o2)
        }
        if(o1 == o2) return 0
        return o1 < o2 ? -1 : 1
    }
}