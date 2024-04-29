import Sorter from "./Sorter";
import MergeSort from "./MergeSort";
import InsertionSort from "./InsertionSort";

class SorterContainer<T> {
    private strategy!: Sorter<T>

    public getSorter() : Sorter<T> {
        return this.strategy
    }
    public setStrategy(sorter:Sorter<T>): void{
        this.strategy = sorter
    }
}

const NUMBERS = 100
function shuffle(array:unknown[]) : unknown[] {
    const shuffledArray : unknown[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
      shuffledArray.push(array[i]);
    }
    return shuffledArray;
  }

const sorter = new SorterContainer<number>()
sorter.setStrategy(new MergeSort())
let n : number[] = new Array(NUMBERS).fill(null).map((e, i) => (i))
n = shuffle(n) as number[]
console.time('merge sort')
sorter.getSorter().sort(n)
console.timeEnd('merge sort')

let n2 : number[] = new Array(NUMBERS).fill(null).map((e, i) => (i))
n2 = shuffle(n2) as number []
console.time('native sort')
n2.sort((a , b) => a-b)
console.timeEnd('native sort')
let n3 = new Array(NUMBERS).fill(null).map((e, i) => (i))
n3 = shuffle(n3) as number[]
sorter.setStrategy(new InsertionSort())
console.time('insertion sort')
sorter.getSorter().sort(n3)
console.timeEnd('insertion sort')
