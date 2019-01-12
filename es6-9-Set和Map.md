```
1. Set结构，类似于数组，但是成员值都是唯一的
	let set = new Set()
	set.add(xxxx);  //添加值
	ser.delete(xxxx); //删除
	set.has(xxxx);   //是否有这个值
	set.clear();    //清除所有成员

	let set = new Set([1, 2, 3]); //可以接受一个数组
	[...set]; //[1, 2, 3]
	set.size;  // 3

	利用Set这个特点，可以用来去除数组和字符串中的重复字符
	[...new Set(array)]
	[...new Set('aabcdd')].join("") //'abcd'
	Array.from(new Set([1,1,2,3]))  //[1,2,3]

	遍历的方法：
		for(let key of set.keys()){}
		for(let value of set.values()){}  //默认方法，等同于 for(let value of set){}
		for(let item of set.entries()){} //键值对
		set.forEach(value, key, set)=>console.log();

	map和filter也可以用在Set上:

	let set = new Set([1, 2, 3]);
	set = new Set([...set].map(x => x * 2));
	// 返回Set结构：{2, 4, 6}

	let set = new Set([1, 2, 3, 4, 5]);
	set = new Set([...set].filter(x => (x % 2) == 0));
	// 返回Set结构：{2, 4}

	
	还可求得并集 交集 差集：
	let a = new Set([1, 2, 3]);
	let b = new Set([4, 3, 2]);

	// 并集
	let union = new Set([...a, ...b]);
	// Set {1, 2, 3, 4}

	// 交集
	let intersect = new Set([...a].filter(x => b.has(x)));
	// set {2, 3}

	// 差集
	let difference = new Set([...a].filter(x => !b.has(x)));
	// Set {1}

2. Map结构：是键值对的结构，其建并不一定是字符串
	const m = new Map();
	const o = {p: 'Hello world'};
	m.set(o, 'content');
	m.get(o) //content,如果没有键，则返回undefined

	m.has(键名)
	m.delete(键名)

	也可以接受一个数组做参数
	const m = new Map({
		['name', '张三'],
		['age', 18],
	});
	m.size // 2
	map.get('name') //张三

	map中的键是根内存地址绑定的，只要内存地址不用，就视为不同的键
	特殊的是 true和'true'是两个键， undefined和null是两个键， NaN是一个键

	map转数组：
		const map = new Map([
		  [1, 'one'],
		  [2, 'two'],
		  [3, 'three'],
		]);

		[...map.keys()]
		// [1, 2, 3]

		[...map.values()]
		// ['one', 'two', 'three']

		[...map.entries()]
		// [[1,'one'], [2, 'two'], [3, 'three']]

		[...map]
		// [[1,'one'], [2, 'two'], [3, 'three']]

	结合map filter方法：
		const map0 = new Map()
		map0.set(1, 'a')
		map0.set(2, 'b')
		map0.set(3, 'c');
		[...map0].filter(([k, v])=>k < 3)


