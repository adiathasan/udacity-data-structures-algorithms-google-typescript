// efficiency is O(log(n))

const binarySearch = <T extends number>(sortedList: T[], val: T) => {
	let pivot: number;
	let pivotIndex: number;

	let start = 0;

	let end = sortedList.length - 1;

	while (start <= end) {
		pivotIndex = Math.floor((start + end) / 2);
		pivot = sortedList[pivotIndex];

		if (pivot === val) {
			return { index: pivotIndex, val: pivot };
		}

		if (pivot < val) {
			start = pivotIndex + 1;
		}

		if (pivot > val) {
			end = pivotIndex - 1;
		}
	}

	return -1;
};

const TEST_LIST_SORTED = [1, 3, 9, 11, 15, 19, 29, 40, 99];
const TEST_VAL1 = 29;
const TEST_VAL2 = 3;
