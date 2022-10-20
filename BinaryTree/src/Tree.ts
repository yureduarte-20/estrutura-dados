import Element, { Nullable } from "./Element";
export class Tree<T>{
    private _root: Nullable<Element<T>>
    constructor(element: Nullable<Element<T>>) {
        this._root = element
    }
    public get root() {
        return this._root;
    }
    public addElement(element: Element<T>) {
        if (!this._root) {
            this._root = new Element<T>(element.key, Object.assign({}, element.element));
            return
        }
        let tempElement: Nullable<Element<T>> = this._root;
        while (tempElement) {
            if (element.key == tempElement.key) {
                break
            }
            else if (element.key > tempElement.key && tempElement.right) {
                tempElement = tempElement.right
                continue
            }
            else if (element.key < tempElement.key && tempElement.left) {
                tempElement = tempElement.left
                continue
            }
            if (element.key > tempElement.key) {
                tempElement.right = new Element<T>(element.key, Object.assign({}, element.element));
                break;
            }
            tempElement.left = new Element<T>(element.key, Object.assign({}, element.element));
            break;

        }
    }
    public find(key: typeof Element.prototype.key) {
        let current = this._root;
        if (!this._root) return;
        while (current) {
            if (current.key == key) {
                break
            }
            if (key > current.key) {
                current = current.right;
                continue;
            }
            if (key <= current.key) {
                current = current.left;
                continue;
            }
        }
        return current
    }
    public remove(key: typeof Element.prototype.key) {
        let node = this.find(key);
        if (!node) return console.error('Elemento não existe na árvore');
        if (node == this._root && (!this._root.left) && (!this._root.right)) {
            this._root = undefined
            return
        }

        if (node.key == this._root?.key) {
            if (this._root.left && !this._root.right) {
                this._root = this._root.left;
                console.warn('Raiz só tem um nó a esquerda');
                return
            }
            if (!this._root.left && this._root.right) {
                console.warn('Raiz só tem um nó a direita');
                this._root = this._root.right;
                return
            }
            const [prev, right] = this.getRightNode(this._root.left as any);
            //console.log('prev: ', prev, 'right:', right)
            if (prev?.key == right?.key) {
                // tem somente um filho a esquerda
                console.log('Raiz tem dois filhos, mas possui somente um filho a esquerda');
                right.right = this._root.right;
                this._root = this._root.left;
                return;
            }
            prev.right = right.left
            console.log('prev :', prev?.key, 'right: ', right?.key, right?.left && prev?.right)
            if (right) {
                right.left = this._root.left;
                right.right = this._root.right;
                console.log('referências trocadas entre o novo nó e a raiz');
                this._root = right
                return;
            }

            return
        }
        if (!(node.left) && !(node.right)) {
            //this.removeElement(node);
            const prev = this.getAntecessor(node);
            console.log(prev, node)
            if (prev?.left == node) {
                prev.left = undefined
            } else if (prev?.right) {
                prev.right = undefined
            }
            return
        }

        if ((node.left) && !(node.right)) {
            const prev = this.getAntecessor(node);
            if (prev?.left == node) {
                prev.left = node.left
            } else if (prev?.right) {
                prev.right = node.left
            }
            return
        }
        if (!(node.left) && (node.right)) {
            //this.removeElement(node);
            const prev = this.getAntecessor(node);
            if (prev?.left == node) {
                prev.left = node.right
            } else if (prev?.right) {
                prev.right = node.right
            }
            return
        }
        const fatherOfNode = this.getAntecessor(node);
        let [fatherRight, rightNode] = this.getRightNode(node.left as any);
        if (fatherRight.key == rightNode.key) {
            if (fatherOfNode?.left == node) {
                rightNode.right = node.right
                fatherOfNode.left = rightNode
            } else if (fatherOfNode?.right == node) {
                rightNode.right = node.right
                fatherOfNode.right = rightNode
            }
            return
        }
        fatherRight.right = rightNode.left
        rightNode.right = node.right
        rightNode.left = node.left
        if (fatherOfNode?.left == node) {
            fatherOfNode.left = rightNode
        } else if(fatherOfNode?.right == node){
            fatherOfNode.right = rightNode
        }
        console.log('fatherRight: ', fatherRight.key, ' rightNode: ', rightNode.key, 'fatherOfNode: ', fatherOfNode?.key);

    }
    private getAntecessor(element: Element<T>) {
        if (!this.root) return
        let current = this._root;
        let prev = current
        while (current) {
            if (element.key > current.key)
                current = current.right;
            else
                current = current.left
            if (current?.key == element.key)
                return prev
            prev = current
        }
        return null
    }
    private getRightNode(el: Element<T>) {
        let current = el;
        let prev = current
        while (current.right) {
            current = current.right;
            if (!current.right) break;
            prev = current
        }
        console.log('prev: ', prev.key, 'right: ', current.key)
        return [prev, current]
    }
    public show(el?: Nullable<Element<T>>) {
        if (el) {
            this.print(el);
            this.show(el.left);
            this.show(el.right)
        }
    }
    private print(element: Element<T>) {
        console.log(element.key)
    }
}