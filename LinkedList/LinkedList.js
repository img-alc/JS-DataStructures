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
      length++;
  }

  removeHead() {
    const newHead = this.head.next;
    this.head = newHead;
    length--;
  }

  addItemToTail(value) {

  }

  removeTail() {

  }

  findItem(value) {

  }

}
