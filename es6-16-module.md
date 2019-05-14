
module：模块

es6前主要有CommonJS和AMD两种

let { stat, exists, readFile } = require('fs'); 
这是CommonJS模块的写法，即整体加载之后，生成一个对象。属于‘运行时加载’。

ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
	import { stat, exists, readFile } from 'fs'; // {}里的名称要与export的名称一致，最好导入的变量只是用于读取。
	这属于‘编译时加载’


	let v1 = 1;
	let v2 = 2;
	function fun1() {};
	function fun2() {};
	export{v1, v2, fun1, fun2};

	可以直接的 export function fun1(){}

而且，在export的模块内，值都是可以动态变化的，但是CommonJS模块输出的值是值的缓存，不会变化