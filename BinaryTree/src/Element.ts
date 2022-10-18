export type Nullable<T> = T | null | undefined
export default class Element<T>{
    constructor(
        private _key: number,
        private _element: T,
        private _left: Nullable<Element<T>>,
        private _right: Nullable<Element<T>>
    ) {

    }
    public get readOnlyElement(): {} & T {
        return Object.assign({}, this.element)
    }
    public get element() { return this._element }
    public setElement(element: T): void {
        this._element = element;
    }
    public get key() { return this._key };
    //public setKey(key: bigint): void { this.key = key };

    public set right(right: Nullable<Element<T>>) { this._right = right };
    public set left(left: Nullable<Element<T>>) {  this._left = left };

    public get right() : Nullable<Element<T>> { return this._right };
    public get left() : Nullable<Element<T>> { return this._left };

}