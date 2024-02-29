const expenses = {
	"2023-01": {
			"01": {
					"food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
					"fuel": [ 210.22 ]
			},
			"09": {
					"food": [ 11.9 ],
					"fuel": [ 190.22 ]
			}
	},
	"2023-03": {
			"07": {
					"food": [ 20, 11.9, 30.20, 11.9 ]
			},
			"04": {
					"food": [ 10.20, 11.50, 2.5 ],
					"fuel": []
			}
	},
	"2023-04": {}
}

function getFirstSundayOfMonth(year, month) {
	const firstDayOfMonth = new Date(year, month - 1, 1);
	const firstDayOfWeek = firstDayOfMonth.getDay();
	const daysToAdd = (7 - firstDayOfWeek) % 7;
	const firstSundayOfMonth = new Date(year, month - 1, 1 + daysToAdd);
	const dayOfMonth = firstSundayOfMonth.getDate();

	return dayOfMonth;
}

function getExpensesFirstWeek(yearMonthObj, yearMonthKey) {
	const yearMonthArray = yearMonthKey.split('-'); // 0 - year, 1 - month
	const firstSunday = getFirstSundayOfMonth(yearMonthArray[0], yearMonthArray[1]);
	let expenses = [];

	for (const day in yearMonthObj) {
		if(day > firstSunday) 
			continue;

		for (const key in yearMonthObj[day])
			expenses = [...expenses, ...yearMonthObj[day][key]]
		
	}

	return expenses;
}

function getMedian(array) {
	array.sort((a, b) => a - b);
	const middle = parseInt(array.length / 2);

	if (array.length % 2 === 0) 
			return (array[middle - 1] + array[middle]) / 2;
	else 
			return array[middle];
}

function get_median_of_first_week_expenses(expenses) {
	let result = null;
	let medianItems = [];

	for (const key in expenses)
		medianItems = [...medianItems, ...getExpensesFirstWeek(expenses[key], key)]

	result = getMedian(medianItems);

	return result;
}

console.log(get_median_of_first_week_expenses(expenses))