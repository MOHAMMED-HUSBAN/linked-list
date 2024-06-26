class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    getFirstElement() {
      return this.head ? this.head.value : 'List is empty';
    }
  }
  
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  
  document.getElementById('show-first-element').addEventListener('click', () => {
    const firstElement = list.getFirstElement();
    document.getElementById('first-element').innerText = `First Element: ${firstElement}`;
  });
  