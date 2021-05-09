class Link<T> {
	private value: T;

	public next: Link<T> | null;

	constructor(elm: T, next = null) {
		this.value = elm;
		this.next = next;
	}

	getElem(): T {
		return this.value;
	}
}

class LinkedList<T> {
	private head: Link<T> | null = null;

	public len = 0;

	constructor(headElm?: Link<T>) {
		this.head = headElm ?? null;
	}

	appendFirst(elm: T) {
		this.head = new Link(elm, this.head);
		this.len++;
	}

	appendLast(elm: T) {
		let current: Link<T>;
		const node = new Link(elm);

		if (this.head === null) {
			this.head = node;
			this.len++;

			return;
		}

		current = this.head;
		while (current.next) {
			current = current.next;
		}

		current.next = node;

		this.len++;
	}

	insertAt(elm: T, index: number) {
		if (index > this.len) {
			return;
		}

		if (index === 0) {
			this.appendFirst(elm);
			return;
		} else if (index === this.len || index === -1) {
			this.appendLast(elm);
			return;
		}

		let currentIndex = 0;

		let current: Link<T> = this.head;

		let previous: Link<T>;

		while (currentIndex < index) {
			previous = current;
			current = current.next;
			currentIndex++;
		}

		const node = new Link(elm, current);

		previous.next = node;

		this.len++;
	}

	removeFirst() {
		this.head = this.head.next;

		this.len--;
	}

	removeLast() {
		let current: Link<T> = this.head;

		let previous: Link<T>;

		while (current.next) {
			previous = current;
			current = current.next;
		}

		previous.next = null;

		this.len--;
	}

	removeAt(index: number) {
		if (index >= this.len) {
			return;
		}

		if (index === 0) {
			this.removeFirst();
			return;
		} else if (index === -1 || index === this.len - 1) {
			this.removeLast();
			return;
		}

		let current: Link<T> = this.head;

		let nextNode: Link<T>;

		let prevNode: Link<T>;

		let currentIndex = 0;

		while (currentIndex < index) {
			prevNode = current;

			current = current.next;

			nextNode = current.next;

			currentIndex++;
		}

		prevNode.next = nextNode;

		this.len--;
	}

	reverseList() {
		let currentVal = this.head;

		let prevVal = null;

		while (currentVal) {
			let nextVal = currentVal.next;

			currentVal.next = prevVal;

			prevVal = currentVal;

			currentVal = nextVal;
		}

		this.head = prevVal;
	}

	reverseTwice() {
		let current = this.head;

		let previous = null;

		while (current) {
			let next = current.next;

			current.next = previous;

			previous = current;

			current = next;
		}

		this.head = previous;
	}

	getList() {
		let current = this.head;

		while (current) {
			console.log(current.getElem());

			current = current.next;
		}

		console.log('_____________');
	}
}

const node = new Link(0);

const list = new LinkedList(node);

list.appendLast(10);

list.appendLast(20);

list.appendLast(30);

list.appendLast(40);

list.appendLast(50);

// list.reverseList();

list.reverseTwice();

list.getList();
