import Sorter from "../Sorter";

export default class MergeSort<T> implements Sorter<T>{
    private comparator?: (o1:T, o2:T) => number
    public sort(values: T[], comparator: (o1:T, o2:T) => number): void {
        this.comparator = comparator;
        this.mergeSort(values);
    
    }
    private mergeSort(a: T[]){
        if(a.length <= 1) return;
        let a0 = a.slice(0 ,Math.floor(a.length / 2))
        let a1 = a.slice(Math.floor(a.length / 2))
        this.mergeSort(a0);
        this.mergeSort(a1);
        this.merge(a0, a1, a);
    }
    private compare(o1:T, o2:T) : number
    {
        if(this.comparator){
            return this.comparator(o1,o2)
        }
        if(o1 == o2) return 0
        return o1 < o2 ? -1 : 1
    }
    private merge(a0:T[], a1:T[], a:T[]){
        let i =0, j =0, k = 0;
        while(i < a0.length && j < a1.length){
            if(this.compare(a0[i],  a1[j]) <= 0 ){
                a[k] = a0[i];
                i++; 
            } else {
                a[k] = a1[j]
                j++;
            }
            k++;
        }
        while(i < a0.length){
            a[k] = a0[i++]
            k++
        }
        while (j < a1.length){
            a[k] = a1[j++]
            k++
        }
        return a
    }

}
