```
module：模块

es6前主要有CommonJS和AMD两种

let { stat, exists, readFile } = require('fs'); 
这是CommonJS模块的写法，即整体加载之后，生成一个对象。属于‘运行时加载’。

ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
	import { stat, exists, readFile } from 'fs'; // {}里的名称要与export的名称一致，最好导入的变量只是用于读取。
	这属于'编译时加载''
	如果要改变变量名，则可以用as关键词，import {stat as s} from 'fs';
	如果要整体加载模块，则可以用* ，import * as circle from 'fs'  /// circle.xxx   circle.yyy 

	let v1 = 1;
	let v2 = 2;
	function fun1() {};
	function fun2() {};
	export{v1, v2, fun1, fun2};
	或者export {vv1 as v1, vv2 as v2, fun1, fun2}

	在export的模块内，值都是可以动态变化的
	CommonJS模块输出的值是值的缓存，不会变化，不同的脚本加载这个接口，得到的都是同样的实例
	
	export default xxxx;
	import yyyy from '' // 其中用default的时候，yyyy可以是任意的名字，也可以用不用{}，不过为了好区分，还是用类名比较好


在es5中，用module.exports或exports导出模块，用require引入模块。
在es6中，用export和export default导出模块，import导入模块。

常用的定义全局的const变量
	例如：
	//首先定义db.js
	export const db = {
	  url: 'http://my.couchdbserver.local:5984',
	  admin_username: 'admin',
	  admin_password: 'admin password'
	};
	//首先定义user.js
	export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];
	// 在index.js里输出
	export {db} from './db';
	export {users} from './users';
	//在需要的地方直接import
	import {db, users} from './index';

注：
es6中顶层的this指向undefined，commonjs中是指向当前模块
一定要注意循环加载，会产生莫名其妙的错误
	




