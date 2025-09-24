/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//   let seenNodes = new Set();
//   let curr = head;
//   while (curr != null) {
//     if (seenNodes.has(curr)) {
//       return true;
//     }
//     seenNodes.add(curr);
//     curr = curr.next;
//   }
//   return false;
// };

var hasCycle = function (head) {
  if (head == null) false;

  let slow = head;
  let fast = head.fast;

  while (slow != fast) {
    if (fast == null || fast.next == null) false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
