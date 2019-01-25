class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addHead(value) {
    const newNode = {
      value: value,
      next: this.head
    };
    this.head = newNode;
    if(this.length === 0) {
      this.tail = this.head;
    }
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
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    if(this.length === 0) {
      this.head = this.head;
    } 
    this.length++;
  }

  removeTail() {
    if(this.length === 0) {
      return undefined;
    } else if(this.length === 1) {
      let tailValue = this.tail.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return tailValue; 
    } else {
      let currNode = this.head;
      let nextNode = currNode.next;
      let isNextNodeTail = false;
      let nextNodeValue;
      do {
        if(nextNode.next === null) {
          isNextNodeTail = true;
          nextNodeValue = nextNode.value;
          nextNode = null;
          currNode.next = null;
          this.tail = currNode;
          this.length--;          
        } else {
          currNode = nextNode;
          nextNode = currNode.next;
        }
      } while(!isNextNodeTail);
      return nextNodeValue;
    }   
  }

  getNumberOfNodes() {
    return this.length;
  }
}

