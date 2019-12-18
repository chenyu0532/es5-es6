```
1. 表示集合的数据结构有4种：Array Map Set String TypeArray arguments，使得这些结构都能用for...of循环
	
	for...in通常用来循环的话，只能获得键名，不能获得键值。不过缺点是输出的顺序不是固定的。所以for...in只适用于对象
	for...of可以获得键值，对于像Array String等没有显式键名的，如果想通过for ... of获取键名，则可以用Object.keys() Object.values() Object.entries()
	Map和Set则有自己的方法，也可以用上述的方法

	对于普通的对象：
		let es6 = {
		  edition: 6,
		  committee: "TC39",
		  standard: "ECMA-262"
		};

		for (let e in es6) {
		  console.log(e);
		}
		// edition
		// committee
		// standard

		for (let e of es6) {
		  console.log(e);
		}
		// TypeError: es6[Symbol.iterator] is not a function

		for...of会报错，可以使用使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。

		for (var key of Object.keys(someObject)) {
			console.log(key + ': ' + someObject[key]);
		}


