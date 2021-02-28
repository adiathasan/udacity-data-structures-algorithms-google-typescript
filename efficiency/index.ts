/*

input manatees: an Array of "manatees", where one manatee is represented by a object
a single manatee has properties like "name", "age", et cetera
n = the number of items in "manatees"
m = the number of properties per "manatee" (i.e. the number of keys in a manatee object)

*/

interface Manatee {
	name: string;
	age: number;
}

// O(n)

const example1 = (manatees: Manatee[]) => {
	manatees.forEach((manatee) => {
		console.log(manatee);
	});
};

// O(1)

const example2 = (manatees: Manatee[]) => {
	console.log(manatees[0]['name']);
	console.log(manatees[0]['age']);
};

// O(mn)

const example3 = (manatees: Manatee[]) => {
	manatees.forEach((manatee) => {
		const keys = Object.keys(manatee);
		keys.forEach((key) => {
			console.log(`${key} : ${manatee[key]}`);
		});
	});
};

// O(n^2)

const example4 = (manatees: Manatee[]) => {
	let oldest: string;
	manatees.forEach((manatee1) => {
		manatees.forEach((manatee2) => {
			if (manatee2.age > manatee1.age) {
				oldest = manatee2.name;
			}
		});
	});

	console.log(oldest);
};
