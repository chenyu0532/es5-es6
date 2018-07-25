1. for ... of 也可以用在遍历字符串上
	for (let c of "hello"){
	}
	//console.log()--->h  e  l  l  o

2. 	let s = 'Hello world!';
	s.startsWith('Hello') // true 表示是否以Hello开头
	s.endsWith('world') // true   表示是否以world结尾
	s.includes('Hello') // true   表示是否包含字符串Hello
	也可以在后面加参数n，表示从n开始搜索
	'hello'.repeat(n) // "hellohello" //repeat表示将原字符串复制n次，n可以使小数，但是以Math.floor为准
	

