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

2. Map结构：