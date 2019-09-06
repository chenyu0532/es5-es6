1. ReferenceError 同作用域判别失败相关，而 TypeError 则代表作用域判别成功了，但是对
	结果的操作是非法或不合理的。

	词法作用域：由书写代码时函数声明的位置来决定的
				作用域查找会在找到第一个匹配的标识符时停止。
				作用域查找始终从运行时所处的最内部作用域开始，逐级向外或者说向上进行，直到遇见
				第一个匹配的标识符为止。
	函数作用域：属于这个函数的全部变量都可以在整个函数的范围内使用及复用（事实上在嵌套的作用域中也可以使用）

		//始终给函数表达式命名是一个最佳实践
		setTimeout( function timeoutHandler() { // <-- 快看，我有名字了！
			console.log( "I waited 1 second!" );
		}, 1000 );

		函数被包含在一对 ( ) 括号内部，因此成为了一个表达式，通过在末尾加上另外一个( )可以立即执行这个函数
		这种模式称为IIFE
		(function(参数){ .. }(参数)) 等价于 (function(参数){ .. })(参数)

	块作用域：
		作用：1 垃圾回收
			function process(data) {
				// 在这里做点有趣的事情
			}
			// 在这个块中定义的内容可以销毁了！<-------
			{
				let someReallyBigData = { .. };
				process( someReallyBigData );
			}
			var btn = document.getElementById( "my_button" );
			btn.addEventListener( "click", function click(evt){
				console.log("button clicked");
			}, false );

			2 let 循环
	提升：
		a = 2;
		var a;
		console.log( a ); //2

		console.log( a ); // undefined
		var a = 2;

		解释：运行js代码时：编译器首先进行编译，再进入等待执行阶段
			 编译阶段时：会找到所有的(变量和函数)声明，并用作用域将他们关联起来，这里要注意的是函数声明会被提升，但是函数表达式不会被提升
			 函数声明首先被提升，变量声明后提升，相同的名字的声明后者会覆盖前者

			 等待执行阶段时：赋值声明会留在原地等待执行

			 所以第一个代码相当于：
			 	var a;
			 	a = 2;
				console.log( a ); //2
			第二段代码相当于：
				var a
				console.log( a ); // undefined
				a = 2;