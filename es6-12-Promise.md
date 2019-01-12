
1. 	const promise = new Promise((resolve, reject)=>{
		if(/成功/){
			resolve(value);			
		} else {
			reject(error);
		}
	});
	promise.then((value)=>{
		//success
	})