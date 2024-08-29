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
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return list1;
    
    const head = new ListNode();
    let pointer1 = list1;
    let pointer2 = list2;
    let tail = head;
    
    while (pointer1 && pointer2) {
        if (pointer1.val < pointer2.val) {
            tail.val = pointer1.val;
            tail.next = new ListNode();
            tail = tail.next;
            pointer1 = pointer1.next;
        } else {
            tail.val = pointer2.val;
            tail.next = new ListNode();
            tail = tail.next;
            pointer2 = pointer2.next;
        }
    }
    
    while (pointer1) {
        tail.val = pointer1.val
        if (pointer1.next) {
            tail.next = new ListNode();
            tail = tail.next;
        }
        pointer1 = pointer1.next;
    }
        
    while (pointer2) {
        tail.val = pointer2.val
        if (pointer2.next) {
            tail.next = new ListNode();
            tail = tail.next;
        }
        pointer2 = pointer2.next;
    }
    
    return head;
    
};