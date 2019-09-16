1. 	尽量不要用window.xxx的全局变量，可以用
	比如：
		const PlayerData = function() {
    		const that = {};
    		that.uniqueID = "1" + getRandomStr(6);
    		return that;
		};
		export default PlayerData;

	或者再cocoscreator里，因为cc是默认全局变量，所以可以用用cc.xx = {}  cc.xx.yy = '';

2. 	0.1+0.2 = 0.30000000000004-->违背了数学的基本常识，这种情况经常用(1+2)/3 = 0.3
	因为js不能很好的处理十进制的小数，但是可以很好的处理整数的运算

3.  检测值类型：
		function type(o) {
			return (o === null)? 'null': (typeof o);
		}

4.  Number.parseInt(xx, 10); // 最好加上进制数
	它的规则是：查看位置0的字符，如果不是有效数字则返回NaN，如果是有效数字，则看第二位，依次类推，直到遇到非数字字符
	parseInt(123.45)-->123
	parseInt(010)-->0开头的则作为8进制数字处理
	parseInt(0x10)-->0x开头的则作为16进制数字处理

5.  null：表示对象的引用为空或者不存在
	undefined：对象中没有想获取的属性；函数没有return；函数的实参个数少于形参个数，其余形参的值为undefined；

6.  逗号运算符：
		var a = (1,2,3,4)--->a = 4
		a = 1,2,3,4 --->a = 1
		var a = 1,2,3,4 --->a = null