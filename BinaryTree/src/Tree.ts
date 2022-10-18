import Element, { Nullable } from "./Element";
export class Tree<T>{
    private root: Nullable<Element<T>>
    constructor(element: Nullable<Element<T>>) {
        this.root = element
    }
    public getRoot() {
        return this.root;
    }
    public addElement(element: Element<T>) {
        if (!this.root) {
            this.root = element;
            return
        }
        let tempElement: Nullable<Element<T>> = this.root;
        while (tempElement) {
            
            if (element.key > tempElement.key && tempElement.right) {
                tempElement = tempElement.right
                continue
            }
            else if (element.key <= tempElement.key && tempElement.left) {
                tempElement = tempElement.left
                continue
            }
            if (element.key > tempElement.key) {
                tempElement.right = element
                break;
            } else {
                tempElement.left = element
                break;
            }

        }
    }
    public show(el?: Nullable<Element<T>>) {
        if (el) {
            this.show(el.left);
            this.print(el);
            this.show(el.right)
        }
    }
    private print(element: Element<T>) {
        console.log(element.readOnlyElement)
    }
}