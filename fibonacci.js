function fibonacciMemoized() {
	let array = [0, 1];
	return function (n) {
		if (!array[n]) {
			let i;
			for (i = array.length; i <= n; i++) {
				array[i] = array[i - 1] + array[i - 2];
			}
			return array[n];
		}
	}
}

let fibo = fibonacciMemoized();

let i;
for (i = 0; i < 1000000; i++) {
	func(10000)	
}
