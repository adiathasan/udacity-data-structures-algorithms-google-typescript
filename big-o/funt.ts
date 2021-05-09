const myFunc = (n: number) => {
	let result = 0;

	for (let i = 1; i <= n; i++) {
		result += i;
	}

	return result;
};

const myReq = (num: number): number => (num / 2) * (1 + num);

const sumArray = (numbers: number[]) => {
	let result = 0; // 1

	for (let i = 0; i < numbers.length; i++) {
		// 1
		result += numbers[i]; // n
	}

	return result; // 1
};

// time complexity of O(n)

const sumArrReduce = (numbers: number[]) =>
	numbers.reduce((prev, curr) => prev + curr, 0);

console.log(sumArrReduce([10, 20, 30]));
