export default class MinHeap {
  constructor(){
    this.heap = [];
  }

  insert(element){
    this.heap.push(element);

    if(this.heap.length > 1) {
      let isElementInPosition = false;
      let currentIndex = this._getLastElementIndex();
      let parentIndex = this._getParentIndex(currentIndex);

      do {
        if(this.heap[parentIndex] > this.heap[currentIndex]){
            //swap elements
            let parentValue = this.heap[parentIndex];
            let currentValue = this.heap[currentIndex];
            this.heap[parentIndex] = currentValue;
            this.heap[currentIndex] = parentValue;
            if(parentIndex === 0){
              isElementInPosition = true;
            } else {
              currentIndex = parentIndex;
              parentIndex = this._getParentIndex(currentIndex);
            }
        } else {
          isElementInPosition = true;
        }
      } while(!isElementInPosition);
    }
  }

  _getParentIndex(elementIndex) {
    return (elementIndex-1)/2;
  }

  _getLeftChildIndex(elementIndex){
    return (2*elementIndex)+1;
  }

  _getRightChildIndex(elementIndex){
    return (2*elementIndex)+2;
  }

  _getLastElementIndex(){
    return this.heap.length-1;
  }
}
