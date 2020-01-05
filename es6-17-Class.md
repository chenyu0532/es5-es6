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
	point.hasOwnProperty('x') // true

	其中constructor可以省略，在内部会自动生成一个空的constructor,其中在类的内部定义的函数
	都是不可枚举的(即不能被for...in所找到)，其返回值实例对象，即this

	constructor里定义的值都是point自身的属性，因为定义在this上
	而toString是原型对象即Point的属性

2.  可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为
	class MyClass {
	  constructor() {
	    // ...
	  }
	  get prop() {
	    return 'getter';
	  }
	  set prop(value) {
	    console.log('setter: '+value);
	  }
	}
	let inst = new MyClass();
	inst.prop = 123;	// setter: 123
	inst.prop;        // 'getter'
	

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


3.	类的内部如果含有this，则默认指向类的实例，但是一旦单独使用该方法，则会报错
	如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是undefined），从而导致找不到print方法而报错。
	class Logger {
	  printName(name = 'there') {
	    this.print(`Hello ${name}`);
	  }
	  print(text) {
	    console.log(text);
	  }
	}
	const logger = new Logger();
	const { printName } = logger;
	printName(); // TypeError: Cannot read property 'print' of undefined
	解决方法主要有两种：
	(1)构造方法中绑定this
		 class Logger {
		  constructor() {
		    this.printName = this.printName.bind(this);
		  }
		  // ...
		}
	(2) 箭头函数
		class Obj {
		  constructor() {
		    this.getThis = () => this;
		  }
		}


	要调用类中的静态方法也是直接 类名.xxxx(); 如果静态方法里含有this,则这个this指的是类，而不是实例
	class Foo {
	  static bar() {
	    this.baz();
	  }
	  static baz() {
	    console.log('hello');
	  }
	  baz() {
	    console.log('world');
	  }
	}
	Foo.bar() // hello

4.	//可以这样把变量_count写到constructor的外面，访问的时候要加this
	class IncreasingCounter {
		  _count = 0;
		  getvalue() {
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
	//super的意思是：子类调用了父类的constructor函数。
	子类的构造函数必须执行一次super，因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，
	然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。

	父类的静态方法，也会被子类继承。
		class A {
		  static hello() {
		    console.log('hello world');
		  }
		}

		class B extends A {
		}

		B.hello()  // hello world

6. super关键字有两种用法：
		(1)是放在子类的constructor里，代表父类的构造函数，不过需要注意的是，super虽然代表了父类的构造函数，
		  但是返回的依然是子类的实例，即super内部的this指的是B的实例

		(2)是作为对象时，在普通方法里指向父类的原型对象；在静态方法里，指向防护类
			class A {
			  p() {
			    return 2;
			  }
			}

			class B extends A {
			  constructor() {
			    super();
			    console.log(super.p()); // 2
			  }
			}

			let b = new B();