const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.queue === null) {
      this.queue = new ListNode(value);
    } else if (!this.queue.next) {
      this.queue.next = new ListNode(value);
    } else {
      let queue = this.queue;
      while (queue.next !== null) {
        queue = queue.next;
        if (queue.next === null) {
          queue.next = new ListNode(value);
          return;
        }
      }
    }
  }

  dequeue() {
    const queueHeadValue = this.queue.value;
    this.queue = this.queue.next;
    return queueHeadValue;
  }
}

module.exports = {
  Queue,
};
