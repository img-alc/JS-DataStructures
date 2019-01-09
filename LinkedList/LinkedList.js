export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addHead(value) {
    const newNode = {
      value: value,
      next: this.head
    };
      this.head = newNode;
      this.length++;
  }

  removeHead() {
    if(this.length === 0) {
      return undefined;
    }
    const value = this.head.value;
    const newHead = this.head.next;
    this.head = newHead;
    this.length--;
    return value;
  }

  addTail(value) {
    if(this.head === null) {
      this.head = {
        value: value,
        next: null
      };
      this.length++;
    } else {
      let isTail = false;
      let currNode = this.head;
      let nextNode = this.head.next;
      while(!isTail) {
        if(nextNode === null) {
          const newNode = {
            value: value,
            next: null
          };
          currNode.next = newNode;
          isTail = true;
          this.length++;
        } else {
          currNode = nextNode;
          nextNode = nextNode.next;
        }
      }
    }
  }

  removeTail() {
    if(this.head === null) {
      return undefined;
    } else {
      let removedValue;
      if(this.length === 1) {
        removedValue = this.head.value;
        this.head = null;
      } else {
       let isTail = false;
       let currNode = this.head;
       let nextNode = this.head.next;
       while(!isTail) {
         if(nextNode.next === null) {
           removedValue = nextNode.value;
           nextNode = null;
           currNode.next = null;
           isTail = true;
         } else {
           currNode = nextNode;
           nextNode = nextNode.next;
         }
       }
     }
     this.length--;
     return removedValue;
    }
  }
}
