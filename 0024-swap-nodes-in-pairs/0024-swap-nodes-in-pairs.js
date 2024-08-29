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
var swapPairs = function(head) {
    //포인터로 첫번째 & 다음것 스왑 -> 포인터도 같이 이동해서 그 다음으로 이동해서 다음것과 스왑
    if (!head || !head.next) return head;

    let temp = head.next;
    head.next = temp.next;
    temp.next = head;
    head.next = swapPairs(head.next);
    
    return temp
};