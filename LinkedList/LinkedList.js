export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addHead(value) {
    const newNode = {
      value:value,
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
      this.head.value = value;
      this.head.next = null;
    } else {
      let isTail = false;
      let currNode = this.head;
      let nextNode = this.head.next;
      while(!isTail) {
        if(nextNode.next === null) {
          const newNode = {
            value: value,
            next: null
          };
          nextNode.next = newNode;
          isTail = true;
        } else {
          currNode = nextNode;
          nextNode = nextNode.next;
        }
      }
    }
    this.length++;
  }

  removeTail() {

  }

  find(value) {

  }

}
