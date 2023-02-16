export class MyNode<T> {
  public data: T;
  public next: MyNode<T> | null;
  constructor(data: T, next: MyNode<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList<T> {
  public head: MyNode<T> | null;
  public tail: MyNode<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data: T): void {
    const node = new MyNode(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  remove(data: T): void {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;

      return;
    }

    let current = this.head;
    let previous: MyNode<T> | null = null;

    while (current.next) {
      if (current.data === data) {
        if (previous) {
          previous.next = current.next;
        }

        this.length--;

        return;
      }

      previous = current;
      current = current.next;
    }

    if (this.tail && this.tail.data === data) {
      this.tail = previous;
      this.length--;
    }
  }
  indexOf(data: T): number {
    return 0;
  }
  elementAt(index: number): T {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }
    return current.data;
  }
}
