
1.  for(let i = 0; i < 3; i++)
    {
    	let i = "abc";
    	console.log(i)
    }
	//三次abc，
	所以这两个i的的作用域不一样，设置循环变量的为父作用域，循环体里面的为单独的子作用域
	每一次的循环，i其实都是一个新的变量。

2. const的作用域与let相同，只在声明的块级作用域里有效
   需要注意的是对于对象和数组来说，const只是保证他们分配的指针是固定的，但其指向的数据是可变的。
   对于数值 字符串 布尔值，则他们的值不能变。

   如：const foo = {}
   	   foo.prob = 123  这样是可以的
   	   foo = {}  这样是不可以的，因为这样改变了foo指向的地址
   	在例如：
   	   const a = []
   	   a.push("111"); 可以
   	   a.length = 0;   可以
   	   a = ["122"];   错误

3. 如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。这称为"暂时性死区"
   function bar(x = y, y = 2) {
     return [x, y];
   }
   bar(); // 报错

4. es6一共有6种声明变量的方法：var(可以忽略) function let const import class
	使用let声明的变量不能用window来访问

附：es5里有一些情况需要理解，es5里没有块级作用域，只有函数作用域和全局作用域
1. 
   var tmp = new Date();
   function f() {
     console.log(tmp);
     if (true) {
       var tmp = 'hello world';
     }
   }
   f(); // undefined
   解释：在调用的时候，if里面的var tmp覆盖了外部的tmp

   var s = 'hello';
   for (var i = 0; i < s.length; i++) {
     console.log(s[i]);
   }
   console.log(i); // 5
   解释：理由同上，变量i本来是用来控制循环的，但是在循环之后，并没有消失，泄露成了全局变量
