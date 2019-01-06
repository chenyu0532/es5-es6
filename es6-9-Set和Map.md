
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