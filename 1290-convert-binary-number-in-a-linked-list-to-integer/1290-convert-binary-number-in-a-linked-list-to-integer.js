/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function(head) {
    let result = 0;

    while (head.next) {
        const value = 2 * head.val;
        result =  2 * result + value;
        head = head.next;
    } 

    result += head.val
    return result;
};