```
1. 表示集合的数据结构有4种：Array Map Set String TypeArray arguments，使得这些结构都能用for...of循环
	
	数组循环：
		(1) var arr=[1,2,3,4];
			arr.forEach(function(val, index) {
				console.log(val, index);
			});
		(2) for...of

	对象遍历：
		(1) Object.keys(obj); //返回一个包含该对象全部的键的数组。
			Object.values(obj); // 返回一个包含该对象全部的值的数组
			Object.entries(obj) —— 返回一个包含该对象全部 [key, value] 键值对的数组。
			再用数组的方法
		(2) for...in


