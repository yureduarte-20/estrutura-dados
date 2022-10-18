import Element, { Nullable } from "./Element";

import { Tree } from "./Tree";
const elements = Array.of({ greet: 'Olá mundo 1' }, { greet: 'Olá mundo 2' }, { greet: 'Olá mundo 3'}, { greet: 'Olá mundo 4' }, { greet: 'Olá mundo 5' } );
const el1 : Nullable<Element<Object>> =  new Element ( 3 ,elements[2], undefined, undefined);
const el2 : Nullable<Element<Object>> =  new Element ( 2 ,elements[1], undefined, undefined);
const el3 : Nullable<Element<Object>> =  new Element ( 1 ,elements[0], undefined, undefined);
const el4 : Nullable<Element<Object>> =  new Element ( 4 ,elements[3], undefined, undefined);
const el5 : Nullable<Element<Object>> =  new Element ( 5 ,elements[4], undefined, undefined);
const tree = new Tree( null );
tree.addElement(el3)
tree.addElement(el2)
tree.addElement(el1)
tree.addElement(el5)
tree.addElement(el4)
tree.show( tree.getRoot() )