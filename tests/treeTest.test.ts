import { BinaryTree } from "../typescript/tree";

describe("tree", () => {
  it("inorder Traversal", () => {
    const binaryTree = new BinaryTree<number>();

    binaryTree.insert(5);
    binaryTree.insert(10);
    binaryTree.insert(7);
    binaryTree.insert(3);

    console.log(binaryTree.inorderTraversal(binaryTree.root, []));

    expect(binaryTree.inorderTraversal(binaryTree.root, [])).toEqual([
      3, 10, 5, 7,
    ]);
  });
});
