class Elem<T> {
	private value: T;
	public next: Elem<T>;
	constructor(value: T, next: Elem<T> = null) {
		this.value = value;

		this.next = next;
	}

	getValue() {
		return this.value;
	}
}

class List<T> {
	private head: Elem<T>;
	public len = 0;

	constructor(head: Elem<T> = null) {
		this.head = head;
	}

	append(elem: T) {
		const node = new Elem(elem);
		let current: Elem<T> = this.head;

		if (this.head) {
			while (current.next) {
				current = current.next;
			}

			current.next = node;
		} else {
			this.head = node;
		}

		this.len++;
	}

	addAsHead(elem: T) {
		const node = new Elem(elem);

		if (this.head) {
			node.next = this.head;
		}

		this.head = node;
		this.len++;
	}

	removeFromHead() {
		if (this.head) {
			let current = this.head;
			this.head = current.next;

			current.next = null;
			this.len--;
		}
	}

	public getList() {
		let current = this.head;

		console.log('[');

		while (current) {
			console.log(current.getValue() + ', ');
			current = current.next;
		}
		console.log(']');
	}
}

class Stack<T> {
	public ll: List<T>;

	constructor(ll: List<T>) {
		this.ll = ll;
	}

	push(elem: T) {
		ll.addAsHead(elem);
	}

	pop() {
		ll.removeFromHead();
	}
}

class Queue<T> {
	public ll: List<T>;

	constructor(ll: List<T>) {
		this.ll = ll;
	}

	enqueue(elem: T) {
		ll.append(elem);
	}

	dequeue() {
		ll.removeFromHead();
	}
}

const ll = new List();

const stack = new Stack(ll);

const queue = new Queue(ll);

stack.push(100);

stack.push(200);

stack.push(300);

stack.pop();

queue.enqueue(69);

queue.enqueue(79);

queue.enqueue(89);

queue.dequeue();

ll.getList();
