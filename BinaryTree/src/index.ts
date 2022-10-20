import Element, { Nullable } from "./Element";

import { Tree } from "./Tree";
const elements = Array.of({ greet: 'Olá mundo 1' }, { greet: 'Olá mundo 2' }, 
                        { greet: 'Olá mundo 3'}, { greet: 'Olá mundo 4' },  
                        { greet: 'Olá mundo 5' }, { greet: 'Olá mundo 6' }, { greet: 'Olá mundo 7'  }, { greet: 'Olá mundo 8' }, { greet: 'Olá mundo 9' } );
const el1 : Nullable<Element<Object>> =  new Element ( 1 ,elements[0]);
const el2 : Nullable<Element<Object>> =  new Element ( 2 ,elements[1]);
const el3 : Nullable<Element<Object>> =  new Element ( 3 ,elements[2]);
const el4 : Nullable<Element<Object>> =  new Element ( 4 ,elements[3]);
const el5 : Nullable<Element<Object>> =  new Element ( 5 ,elements[4]);
const el6 : Nullable<Element<Object>> =  new Element ( 6 ,elements[5]);
const el7 : Nullable<Element<Object>> =  new Element ( 7 ,elements[6]);
const el8 : Nullable<Element<Object>> =  new Element ( 8 ,elements[7]);
const el9 : Nullable<Element<Object>> =  new Element ( 9 ,elements[8]);
const tree = new Tree( null );

tree.addElement(el6)
tree.addElement(el8)
tree.addElement(el2)
tree.addElement(el4)
tree.addElement(el3)
tree.addElement(el1)
//tree.show( tree.root )
console.log()
console.log()
console.log()
tree.remove(2)
//tree.show(tree.root)
//tree.show( tree.root )
tree.show(tree.root)