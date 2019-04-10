
Promise是异步解决方案，有3种状态，pending（进行中）、fulfilled（已成功）和 rejected（已失败）

1. 	const promise = new Promise((resolve, reject)=>{
		if(/成功/){
			resolve(value);			
		} else {
			reject(error);
		}
	});
	 //then方法分别指定了resolved和rejected状态，这里才是真正的异步，等待所有同步任务结束了
	 //以后，才进行异步操作
	promise.then(function(value){ 
		//success
	}).catch(function(error) {
		// error
	}).finally(function() {
		//总是会执行
	});
	注：then方法返回的也是一个新的Promise实例


	//下面是一个游戏中常用的在canvas模式下加载图片的例子
	function loadImageAsync(url) {
		return new Promise(function(resolve, reject) {
		    const image = new Image();
		    image.onload = function() {
		      	resolve(image);
		    };
		    image.onerror = function() {
		      	reject(new Error('Could not load image at ' + url));
		    };
		    image.src = url;
		});
	}
	下面是一个实现Ajax操作的例子：
	const getJSON = function(url) {
	const promise = new Promise(function(resolve, reject){
	const handler = function() {
	      if (this.readyState !== 4) {
	        return;
	      }
	      if (this.status === 200) {
	        resolve(this.response);
	      } else {
	        reject(new Error(this.statusText));
	      }
	    };
	    const client = new XMLHttpRequest();
	    client.open("GET", url);
	    client.onreadystatechange = handler;
	    client.responseType = "json";
	    client.setRequestHeader("Accept", "application/json");
	    client.send();

	  });

	  return promise;
	};

	getJSON("/posts.json").then(function(json) { //这里resolve和reject的回调都带有参数
	  console.log('Contents: ' + json);
	}, function(error) {
	  console.error('出错了', error);
	});
