// June 6 2022
// Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  var nowA = headA;
  var nowB = headB;

  while (nowA !== nowB) {
    nowA = nowA ? nowA.next : headB;
    nowB = nowB ? nowB.next : headA;
    console.log(nowA && nowA.next);
    console.log(nowA && nowA.val);
  }

  return nowA;
};
