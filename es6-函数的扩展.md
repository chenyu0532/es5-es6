1.  给一个函数的参数写默认值时，默认值不是传值的，而是每次都重新计算默认值的值
    例如：let x = 99;
    	  function foo(p = x + 1)
    	  {
    	  	console.log(p)
    	  }
    	  foo() --->100
    	  x = 200
    	  foo() --->201