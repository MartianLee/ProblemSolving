export class Stack {
  _arr: any[];
  
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
  empty() {
      return this._arr.length == 0 ? true : false;
  }
}

export class Stack2 {
    list: any[];
    current: number;
    constructor() {
        this.list = [];
        this.current = 0;
    }
    push(value) {
        if (this.list.length > this.current) {
            this.list[this.current] = value;
        } else {
            this.list.push(value);
        }
        this.current++;
    }
    pop() {
        const lastValue = this.list[this.current - 1];
        this.current--;
        return lastValue;
    }
    empty() {
        return this.current == 0 ? true : false;
    }
    show() {
        console.log(this.list, this.current);
    }
}