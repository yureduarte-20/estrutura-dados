import Node, { Nullable } from "./Node";

export class List <T> {
    private _head : Nullable<Node<T>>
    private _index : number = -1;
    public push( element : T ) : void{
        if(!this._head){
            this._head = new Node( element, undefined);
            this._index++;
            return
        }
        let currentEl = this._head;
        while(currentEl.next){
            currentEl = currentEl.next
        }
        currentEl.next = new Node(element, undefined);
        this._index++;
    }
    public show(){
        let currentEl = this._head
        while(currentEl){
            console.log(currentEl.value)
            currentEl = currentEl.next 
        }
    }
    public deleteByIndex(index : number){
        const floorIndex = Math.floor(index);
        if( floorIndex > this._index || index <= -1 || !this._head)
            throw new RangeError("Elemento não existente")
        if(floorIndex == 0){
            this._head = this._head.next
            this._index--
            return
        }
        let tempIndex = 0;
        let currentElement : Nullable<Node<T>> = this._head;
        let predecessor : Nullable<Node<T>> = currentElement;
        while(tempIndex != floorIndex){
            predecessor = currentElement;
            currentElement = currentElement?.next;
            tempIndex++;
        }
        if(predecessor && predecessor.next){
            predecessor.next = currentElement?.next 
        }
        this._index--;
        
    }
}