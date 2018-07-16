1. 解构赋值的意思就是：可以这样给变量赋值 let [a,b,c] = [1, 2, 3]; 
   或者 let [a,[b,c]] = [1, [2, 3]]
   或者let [a, , c] = [1, , 3]; 
   或者 let [a, ...c] = [1, 2, 3] //a = 1 c = [2,3]
   只要是左右两边模式匹配就好，没有对应的值的话就是undefined，但是如果等式右面不是数组的话就会报错

2. 默认值：
	let [x, y = 'b'] = ['a']; // x='a', y='b'   
	let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
	 等号左边是默认值，右边是要赋的值，es6中只有当右边的值严格为(===)undefined的时候，默认值才不会生效

3. 对象的解构赋值
	对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

	例如：let { bar, foo } = { foo: "aaa", bar: "bbb" };
		 foo // "aaa"
		 bar // "bbb"
	其赋值的真正含义是：let { foo: foo1, bar: bar1 } = { foo: "aaa", bar: "bbb" };
	     foo是属性名，foo1是值，是首先找到属性名，然后把值赋给后面的值---> foo1 = "aaa"

	作用于嵌套结构对象：
		const node = {
		  loc: {
		    start: {
		      line: 1,
		      column: 5
		    }
		  }
		};
		let { loc, loc: { start }, loc: { start: { line }} } = node;
		line // 1
		loc  // Object {start: Object}
		start // Object {line: 1, column: 5}
		ps:其实就看最里层的属性名对应的值就行。。。
