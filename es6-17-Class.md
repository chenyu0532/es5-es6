
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
	都是不可枚举的(即不能被for...in所找到)，其返回值实例对象，即this

	constructor里定义的值都是point自身的属性，因为定义在this上
	而toString是原型对象即Point的属性

2.  也可以这样定义类：
	const MyClass = class Me {
	  	getClassName() {
	    	return Me.name;
	  	}
	};
	let inst = new MyClass();
	inst.getClassName() // Me
	Me.name // ReferenceError: Me is not defined

	这个类的名字是Me,但是Me只能在类的内部使用，指当前类，在class外部，只能用MyClass


3.	要调用类中的静态方法也是直接 类名.xxxx(); 如果静态方法里含有this,则这个this指的是类，而不是实例

4.	//可以这样把变量_count写到constructor的外面，访问的时候要加this
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
5. class OtherPoint extends Point {
		contstructor(x, y, color){
			super(x, y);
			this.color = color
		}
	}
	//说明了OtherPoint继承了Point类，继承了Point累里面所有的属性和方法，通过new来构造的对象可以访问
	//父类和子类的函数和方法
	//super的意思是：子类调用了父类的constructor函数，子类的构造函数必须执行一次super

	如果子类没有constructor，super会被默认添加，不过推荐上一种写法
	class ColorPoint extends Point {
	}