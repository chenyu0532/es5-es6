```
1. 表示集合的数据结构有4种：Array Map Set String TypeArray，使得这些结构都能用for...of循环
	

	for...in遍历数组的缺点：
		for (var key in myArray) {
		  	console.log(myArray[key]);
		}
		index是字符串型的数字
		遍历顺序可能不是按照数组的实际顺序
		包含了原型属性



	for...of遍历数组：
		for (var value of myArray) {
		  	console.log(value);
		}

	所以for...in通常用来遍历对象，输出的是键名；for...of是除了数组之外