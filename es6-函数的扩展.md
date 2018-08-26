1.  给一个函数的参数写默认值时，默认值不是传值的，而是每次都重新计算默认值的值
    例如：
    	  ```
    	  let x = 99;
    	  function foo(p = x + 1)
    	  {
    	  	console.log(p)
    	  }
    	  foo() --->100
    	  x = 200
    	  foo() --->201;
    	  ```

2.  也可以和函数结合使用：
		  function foo({x, y = 1}){
				console.log(x, y)		  
		  }
		  foo({x:2}) --->2, 1   注意调用这个函数时，参数也要为对象

	也可以这样用：
		  ```
		  function fetch(url, {body = "", method = "GET", headers = {}}){
		  		console.log(method)
		  }
		  ```
		  fetch("baidu", {}) --->GET
		  fetch("baidu") --->error       ---》111

		  ```
		 function fetch(url, {body = "", method = "GET", headers = {}} = {}){
		  		console.log(method)
		  }
		  ```
		  fetch("baidu") --->GET        ---->>要注意111和这个的区别

		  还有一种情况：
		  function m1({x = 0, y = 0} = {})
		  {
		  		return [x, y];
		  }
		  function m2({x, y} = {x : 0, y: 0})
		  {
		  		return [x, y];
		  }
		  