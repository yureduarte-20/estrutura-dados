export type Nullable<T> = T | null | undefined
export default class Node<T>{
    constructor(
        private _value : T,
        private _next : Nullable<Node<T>>
    ){}
    public set next( n: Nullable<Node<T>> ){ this._next = n }
    public get next (){ return this._next }
    public get value(){ return this._value };
    public set value( value : T ){ this._value = value }

}