// export class PriorityQueue<T> {
//   root;
//   constructor() {
//     this.root = null;
//   }

//   insert(data: T): void {}
//   pop(): void {}
// }

class PriorityQueueNode<T> {
  constructor(
    public element: T,
    public priority: number
  ) {}
}

class PriorityQueue<T> {
  private items: PriorityQueueNode<T>[];

  constructor() {
    this.items = [];
  }

  // Insert an element into the priority queue
  enqueue(element: T, priority: number): void {
    const node = new PriorityQueueNode(element, priority);
    let contains = false;

    // Finding the correct position to insert the new node
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > node.priority) {
        this.items.splice(i, 0, node);
        contains = true;
        break;
      }
    }

    // If the element has the highest priority, it is added at the end
    if (!contains) {
      this.items.push(node);
    }
  }

  // Remove the element from the priority queue that has the highest priority
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift()?.element;
  }

  // Peek at the element with the highest priority without removing it
  front(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0].element;
  }

  // Check if the priority queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Return the size of the priority queue
  size(): number {
    return this.items.length;
  }

  // Clear the priority queue
  clear(): void {
    this.items = [];
  }

  // Print the elements of the priority queue along with their priorities
  printQueue(): void {
    for (const item of this.items) {
      console.log(`${item.element} - ${item.priority}`);
    }
  }
}

// Example usage
const priorityQueue = new PriorityQueue<string>();
priorityQueue.enqueue("Person A", 2);
priorityQueue.enqueue("Person B", 1);
priorityQueue.enqueue("Person C", 3);

priorityQueue.printQueue(); // Person B - 1, Person A - 2, Person C - 3

console.log(priorityQueue.dequeue()); // Person B
priorityQueue.printQueue(); // Person A - 2, Person C - 3
