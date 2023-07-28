/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let node = head;
  const stack = [];
  
  while (node) {
    stack.push(node);
    node = node.next;
  }
  const middleNode = Math.floor(stack.length / 2);
  return stack[middleNode];
};