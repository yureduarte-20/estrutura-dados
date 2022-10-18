import { List } from "./List";
import Node from "./Node";

const elements : number[] = [ 1, 7, 25, 6, 7, 6 ];
const list = new List<number>()
for(let number of elements){
    list.push(number);
}
list.show();
list.show()