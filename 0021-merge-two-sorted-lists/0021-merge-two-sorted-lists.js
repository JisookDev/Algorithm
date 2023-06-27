/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 
var mergeTwoLists = function (list1, list2) {
  let node1 = list1;
  let node2 = list2;

  let arr = [];
  while (node1 && node2) {
    let value;
    if (node1.val > node2.val) {
      value = node2.val;
      node2 = node2.next;
    } else {
      value = node1.val;
      node1 = node1.next;
    }
    arr.push(value);
  }

  while (node1) {
    arr.push(node1.val);
    node1 = node1.next;
  }
  while (node2) {
    arr.push(node2.val);
    node2 = node2.next;
  }

  let head = null;
  let tail = null;

  arr.forEach((value) => {
    if (!head) {
      head = tail = new ListNode(value, null);
    } else {
      tail.next = new ListNode(value, null);
      tail = tail.next;
    }
  });

  return head;
};
