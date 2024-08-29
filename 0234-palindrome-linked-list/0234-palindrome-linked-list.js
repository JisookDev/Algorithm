/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head && !head.next) return true;
    
    let pointer = head;
    const stack = [];
    
    
    while (pointer) {
        stack.push(pointer.val);
        pointer = pointer.next;        
    }
    
    pointer = head;
    
    while (pointer) {
        //stack 제일 마지막 값이랑 pointer랑 같으면 pop
        if (stack.at(-1) === pointer.val) {
            stack.pop()
        }
        pointer = pointer.next;
    }
    
    return !stack.length;
};