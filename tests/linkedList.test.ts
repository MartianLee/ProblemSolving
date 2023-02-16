import { LinkedList } from "../typescript/linkedList";

describe("linkedList", () => {
  it("linkedList", () => {
    const list = new LinkedList<number>();
    list.add(3);
    list.add(6);
    list.add(13);
  });
});
