
```
1. async也是一种异步操作函数
	返回一个Promise，可用then catch来添加回调函数
	
	// return的内容可以作为then的参数
	async function f() { 
	  return 'hello world';
	}
	f().then(v => console.log(v))
	// "hello world"


	async function f() {
	  throw new Error('出错了');
	}
	f().then(
	  	v => console.log(v);
	).catch(
		e => console.log(e); //走这里
	)


2. await函数

	await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。

	async function f() {
	  await Promise.reject('出错了');
	}
	f()
	.then(v => console.log(v))
	.catch(e => console.log(e)) // 出错了


	// 虚拟一个休眠效果
	function sleep(interval) {
		return new Promise(resolve => {
			setTomeout(resolve, interval);
		})
	}
	async one2FiveInAsync() {
		for(let i = 0; i < 5; i++) {
			sleep(1000);
		}
 	}	
 	one2FiveInAsync();

 	注意：
 	(1)	await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
 		这样做是为了让catch捕捉到这个错误，而不至于影响到下一步的进行
 		async function myFunction() {
		  try {
		    await somethingThatReturnsAPromise();
		  } catch (err) {
		    console.log(err);
		  }
		}
	(2) await只能用在async里，否则会报错
