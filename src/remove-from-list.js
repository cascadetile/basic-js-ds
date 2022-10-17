const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  // 1 -> 2 -> 3 -> 4
  // c
  let removeFirst = false;
  let current = l;

  let prev = null;

  // 1 -> 2 -> 3 -> 4
  if (current.value === k) {
    current = current.next;
    removeFirst = true;
  }

  while (current) {
    prev = current;
    current = current.next;

    if (current && current.value === k) {
      prev.next = current.next;
      if (prev.next && prev.next.value === k && current.next.next) {
        prev.next = current.next.next;
      } 
    } 
    
  }

  return removeFirst ? l.next : l;
}

module.exports = {
  removeKFromList
};
