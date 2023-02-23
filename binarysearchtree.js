class Node2 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(inputarr) {
        this.array = new Set(inputarr.sort(function (a, b) {
            return a - b
        })); // sorts array basically
        this.root = inputarr[inputarr.length / 2];
    }

    buildTree(inputarr) {
        if (inputarr.length < 2) return;
        let mid = inputarr.length / 2;
        let root = new Node2(inputarr[mid]);
        const set = new Set(inputarr);
        const leftHalf = Array.from(set).slice(0, mid - 1);
        const rightHalf = Array.from(set).slice(mid + 1, inputarr.length);
        root.left = this.buildTree(leftHalf);
        root.right = this.buildTree(rightHalf);
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log("\n\n\nBinary Search Tree Stuff:");

tree.buildTree(tree.array);