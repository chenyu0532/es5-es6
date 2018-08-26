1. 扩展运算符 ...
	...[2, 3, 4]--->2,3,4把数组转为一个用逗号分隔的参数序列，要注意是数组
	例如：	
		let arr1 = [0, 1, 2];
		let arr2 = [3, 4, 5];
		arr1.push(...arr2);

		Math.max(...[14, 3, 77])

		克隆数组：
			const a1 = [1, 2];
			// 写法一
			const a2 = [...a1];
			// 写法二
			const [...a2] = a1;

		合并数组:(属于浅拷贝)
			const arr1 = ['a', 'b'];
			const arr2 = ['c'];
			const arr3 = ['d', 'e'];
			[...arr1, ...arr2, ...arr3]

		赋值：
			const [first, ...rest] = ["foo"];
			first  // "foo"
			rest   // []
			当用在赋值上时，扩展运算符只能放在参数的最后一位，否则会报错

2. 把字符串转为数组：[...'hello'] --->[ "h", "e", "l", "l", "o" ]

3. 也可以把set map结构转为数组

	let map = new Map([
	  [1, 'one'],
	  [2, 'two'],
	  [3, 'three'],
	]);
	let arr = [...map.keys()]; // [1, 2, 3]

4. Array.from()----将对象转为数组，对象的类型为字符串、数组、类似数组的对象、Set map结构，如果参数本身是数组的话，就是复制一个数组。
					这些结构有一个共同点就是有length属性
	let arrayLike = {
	    '0': 'a',
	    '1': 'b',
	    '2': 'c',
	    length: 3
	};
	let arr = Array.from(arrayLike); // ['a', 'b', 'c']

5. Array.of() ----将一组值转化为数组，用处是基本可以取代Array()和newArray()，
					总是返回参数值所组成的数组，如果没有参数，则返回一个空数组

6. copyWithin(target, start = 0, end = this.length)---- 将start----end前的成员覆盖到从target开始的位置,负数的话表示倒着数,
														倒着数的时候，最末尾的元素时-1
	[1, 2, 3, 4, 5].copyWithin(0, 3, 4)---->[4,2,3,4,5]
	[1, 2, 3, 4, 5].copyWithin(0, -2, -1)---->[4,2,3,4,5]
