export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }


  addItemToHead(value) {
      const newNode = {
        value:value,
        next: this.head
      };

      this.head = newNode;
  }

  removeHead() {
    const newHead = this.head.next;
    this.head = newHead;
  }

  addItemToTail(value) {

  }

  removeTail() {

  }

  findItem(value) {

  }

}

var ll = LinkedList();
ll.addItemToHead(15);
ll.addItemToHead(5);
ll.addItemToHead(1);
ll.addItemToHead(151);
