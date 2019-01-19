```
1. 	class Point{
		constructor(x, y){
			this.x = x;
			this.y = y;
		}
		toString(){
			return this.x + '-----' + this.y;
		}
	}
	let point = new Point(1, 2);
	point.toString()

	其中constructor可以省略，在内部会自动生成一个空的constructor,其中在类的内部定义的函数
	都是不可枚举的(即不能被for...in所找到)

	constructor里定义的值都是point自身的属性，因为定义在this上
	而toString是原型对象即Point的属性

2.	要调用类中的静态方法也是直接 类名.xxxx();

3.	//可以这样把变量_count写到constructor的外面，访问的时候要加this
	class IncreasingCounter {
		  _count = 0;
		  get value() {
		    console.log('Getting the current value!');
		    return this._count;
		  }
		  increment() {
		    this._count++;
		  }
	}

4. class OtherPoint extends Point {
		contstructor(x, y, color){
			super(x, y);
			this.color = color
		}
	}
	//说明了OtherPoint继承了Point类，继承了Point累里面所有的属性和方法，通过new来构造的对象可以访问
	//父类和子类的函数和方法
	//super的意思是：子类调用了父类的constructor函数，子类的构造函数必须执行一次super