class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(value) { // adds new node containing value to end of list
        let tail = new Node(value);
        let current;
        if (this.size === 0) this.append(tail);
        else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = tail;
        }
        this.size++;
    }
    prepend(value) { // adds new node containing value to start of list
        this.head = new Node(value, this.head);
        this.size++;
    }
    size() { // returns number of nodes in the list
        console.log(this.size);
    }
    head() { // returns first node in the list
        console.log(this.head);
    }
    tail() { // returns last node in the list
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        console.log(current);
    }
    at(index) { // returns node at index
        let current = this.head;
        let pos = 0;
        if (pos === index) {
            console.log(current.value);
        }
        while (current.next !== null) {
            current = current.next;
            pos++;
            if (pos === index) {
                console.log(current.value);
            }
            if (pos > this.size) return;
        }
        return null;
    }
    pop() { // removes node at end of list
        let current = this.head;
        let previous;
        if (this.size === 0) return;
        else {
            while (current.next !== null) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
        this.size--;
    }
    contains(value) { // returns true if value is in list, or false if it isn't
        let current = this.head;
        if (current.value === value) {
            console.log(true);
            return;
        }
        while (current.next !== null) {
            current = current.next;
            if (current.value === value) {
                console.log(true);
                return;
            }
        }
        console.log(false);
    }
    find(value) { // returns index of node containing value, or null if not found
        let current = this.head;
        let pos = 0;
        if (current.value == value) {
            console.log(pos);
            return;
        }
        while (current.next !== null) {
            current = current.next;
            pos++;
            if (current.value == value) {
                console.log(pos);
                return;
            }
        }
        console.log(null);
    }
    toString() { // represents LinkedList objects as strings, to be printed to console
        let current = this.head;
        let string = current.value;
        while (current.next !== null) {
            current = current.next;
            string += " " + current.value;
        }
        console.log(string);
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value || null;
        this.next = next;
    }
}

const linkedList = new LinkedList();

console.log("Linked List Stuff:");
linkedList.prepend("Hello");
linkedList.append("World");
linkedList.append("World");
linkedList.append("World");
linkedList.append("AAAAA");
linkedList.append("lmao");
linkedList.append("World");
linkedList.append("World");
linkedList.toString();
console.log(linkedList.size);
linkedList.pop();
linkedList.append("HELL");
linkedList.find("HELL");
linkedList.find("HEAVEN");
linkedList.contains("HELL");
linkedList.contains("HEAVEN");
linkedList.at(1);
linkedList.at(5);
console.log(linkedList.head);
linkedList.toString();
linkedList.tail();