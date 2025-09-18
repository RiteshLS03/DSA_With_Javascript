var Node = function (val) {
  this.value = val;
  this.next = null;
};

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.size || index < 0) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.value;
};

/**
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  if (this.head == null) {
    this.head = newNode;
  } else {
    let current = this.head;

    while (current.next != null) {
      current = current.next;
    }

    current.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size || index < 0) return; // bounds check

  if (index === 0) {
    this.addAtHead(val); // already increments size
    return;
  }

  if (index === this.size) {
    this.addAtTail(val); // already increments size
    return;
  }

  let newNode = new Node(val);
  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  newNode.next = curr.next;
  curr.next = newNode;

  this.size++; // increment only here
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let curr = this.head;

  if (index >= this.size || index < 0) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
