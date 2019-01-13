```
1. 	const promise = new Promise((resolve, reject)=>{
		if(/成功/){
			resolve(value);			
		} else {
			reject(error);
		}
	});
	 //then方法分别指定了resolved和rejected状态，这里才是真正的异步，等待所有同步任务结束了
	 //以后，才进行异步操作
	promise.then((value)=>{ 
		//success
	}, (error)=>{
		//error
	})

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
