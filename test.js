// let {toString:s} = 123;
// console.log(s); //Function: toString

// console.log(`string line1
// string line2 `)

	// let name = "sunzhen";
	// let time = "toady";
	// console.log(`Hello ${name}, how are you ${time}`);

//console.log(typeof(...[1, 2, 3]));
// let a = (...[1, 2, 3]);
// console.log(a);

// const arr1 = ['a', 'b'];
// const arr2 = ['c'];
// const arr3 = ['d', 'e'];
// console.log(...arr1); //a  b
// console.log([...arr1, ...arr2, ...arr3]);  //['a', 'b', 'c', 'd', 'e']

// let a = new Set([1, 2, 3]);
// console.log([...a]);
// function f() {
//   console.log('aaa');
// }

// let [x = f()] = [1];
// console.log(x);


	// const MyClass = class {
	//   	getClassName() {
	//     	return this.name;
	//   	}
	// };
	// let inst = new MyClass();
	// console.log(inst.getClassName()) // Me
	// console.log(MyClass.name) // ReferenceError: Me is not defined


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
