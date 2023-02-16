class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(data: T): void {
    const newNode = new TreeNode(data);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length) {
      const currentNode = queue.shift()!;

      if (!currentNode.left) {
        currentNode.left = newNode;
        return;
      } else {
        queue.push(currentNode.left);
      }

      if (!currentNode.right) {
        currentNode.right = newNode;
        return;
      } else {
        queue.push(currentNode.right);
      }
    }
  }

  inorderTraversal(node: TreeNode<T> | null, arr: T[]): T[] {
    if (!node) {
      return arr;
    }

    this.inorderTraversal(node.left, arr);
    arr.push(node.data);
    this.inorderTraversal(node.right, arr);

    return arr;
  }
}
