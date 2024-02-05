/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(root.val);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
  // const nodeMap = new Map();
  // const memo = new Map();
  // const treeMap = new Map();
  // const stack = [];
  // // const tree;
  // inorder.forEach((item, index) => {
  //     nodeMap.set(item, index);
  // })
  // // 무조건 preorder[0] is root
  // memo.set(preorder[0], {
  //     parent: 'root',
  //     left: null,
  //     right: null,
  // });
  // stack.push(preorder[0]);
  // for (let i = 1; i < preorder.length; i++) {
  //     const tempStack = [];
  //     do {
  //         let stackTop = stack[stack.length - 1];
  //         const stackTopNode = memo.get(stackTop);
  //         const inorderStackTopParent = inorder.indexOf(stackTopNode.parent);
  //         const inorderStackTop = inorder.indexOf(stackTop);
  //         const inorderMe = inorder.indexOf(preorder[i]);
  //         if (stackTopNode.parent == 'root') {
  //             // left if your parent
  //             if (inorderMe < inorderStackTop) {
  //                 memo.set(stackTop, {
  //                     ...stackTopNode,
  //                     left: preorder[i],
  //                 });
  //                 memo.set(preorder[i], {
  //                     parent: stackTop,
  //                     left: null,
  //                     right: null,
  //                 });
  //             } else {
  //                 if (stackTopNode.right) {
  //                     // It means It is the most right, in current step
  //                     // Than, it is the most
  //                     // tempStack[0];
  //                     memo.set(tempStack[0], {
  //                         ...memo.get(tempStack[0]),
  //                         right: preorder[i],
  //                     });
  //                     memo.set(preorder[i], {
  //                         parent: tempStack[0],
  //                         left: null,
  //                         right: null,
  //                     });
  //                     while (tempStack.length > 0) {
  //                         stack.push(tempStack.pop());
  //                     }
  //                     break;
  //                 }
  //                 memo.set(stackTop, {
  //                     ...stackTopNode,
  //                     right: preorder[i],
  //                 });
  //                 memo.set(preorder[i], {
  //                     parent: stackTop,
  //                     left: null,
  //                     right: null,
  //                 });
  //             }
  //             break;
  //         } else {
  //             if (inorderMe < inorderStackTop) {
  //                 // time to stop
  //                 // if (stackTopNode.left) {
  //                 //     // I'm stack top's last children's right

  //                 // } else {
  //                     // I'm left children of stack top
  //                     memo.set(stackTop, {
  //                         ...stackTopNode,
  //                         left: preorder[i],
  //                     });
  //                     memo.set(preorder[i], {
  //                         parent: stackTop,
  //                         left: null,
  //                         right: null,
  //                     });
  //                 // }
  //                 break;
  //             } else if (inorderMe < inorderStackTopParent) {
  //                 // stackTop is your sibiling
  //                 memo.set(stackTopNode.parent, {
  //                     ...memo.get(stackTopNode.parent),
  //                     right: preorder[i],
  //                 });
  //                 memo.set(preorder[i], {
  //                     parent: stackTopNode.parent,
  //                     left: null,
  //                     right: null,
  //                 });
  //                 tempStack.push(stack.pop());
  //                 break;
  //             }
  //             // else if (inorderStackTop < inorderStackTopParent && inorderStackTopParent < inorderMe) {
  //             //     // stackTop is your sibiling
  //             //     console.log(inorderStackTop, inorderStackTopParent, inorderMe);
  //             //     console.log(stackTopNode.parent, memo.get(stackTopNode.parent));
  //             //     memo.set(stackTopNode.parent, {
  //             //         ...memo.get(stackTopNode.parent),
  //             //         right: preorder[i],
  //             //     });
  //             //     memo.set(preorder[i], {
  //             //         parent: stackTopNode.parent,
  //             //         left: null,
  //             //         right: null,
  //             //     });
  //             //     tempStack.push(stack.pop());
  //             //     break;
  //             // }
  //             else {
  //                 // stackTop if your parent me is right or sibiling도 아니고 parent 도 아닌 경우
  //                 // 이럴 때, left node의 parent를 따라 올라가야 함.
  //                 //////// 여기고쳐야함.
  //                 /*

  //                 */
  //                 if (inorderStackTop < inorderMe && inorderMe < inorderStackTopParent) {
  //                     // me is left node only right 인 경우
  //                     memo.set(stackTop, {
  //                         ...stackTopNode,
  //                         right: preorder[i],
  //                     });
  //                     memo.set(preorder[i], {
  //                         parent: stackTop,
  //                         left: null,
  //                         right: null,
  //                     });
  //                     break;
  //                 } else {
  //                     tempStack.push(stack.pop());
  //                 }
  //             }
  //         }
  //     } while (stack.length > 0);
  //     stack.push(preorder[i]);
  //     console.log(memo, stack);
  // }
  // for (let i = preorder.length - 1; i >= 0; i--) {
  //     const left = memo.get(preorder[i]).left;
  //     const right = memo.get(preorder[i]).right
  //     const leftNode = left ? treeMap.get(left) : null;
  //     const rightNode = right ? treeMap.get(right) : null;
  //     const node = new TreeNode(preorder[i], leftNode, rightNode);
  //     // console.log(node);
  //     treeMap.set(preorder[i], node);
  // }
  // return treeMap.get(preorder[0]);
};
