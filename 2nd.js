// console.log(this);


// const obj = {
// 	fn: function (){
// 		console.log(this);
// 	},
// 	fu2: () => {
// 		console.log(this);
// 	}
// };
// obj.fn();
// obj.fn2();

// function x(){
// 	console.log(this);
// 	function y(){
// 		console.log(this);
// 		function z(){
// 			console.log(this);
// 		}
// 		z();
// 	}
// 	y();
// }
// x();

// const person = {
//     name: "Akshay",
//     print: function x() {
//         console.log(this);
//     }
// };
// const person2 = {
//     name: "Simren",
// };

// x.call(this); // same as x();
// x.call(person);
// x.call(person2);

// person.print();
// person.print.call();
// person.print.call(this);
// person.print.call(person2);
// person.print.call(person);

// const obj = {
//     firstName: "Akshay",
//     printName: () => {
//         console.log(this.firstName);
//     },
//     printName2: function () {
//         console.log(this.firstName);
//     }
// };

// obj.printName();
// obj.printName2();

/*
const obj = {
    firstName: "Akshay",
    printName: () => {
        console.log(this);
    },
    printName2: function () {
        console.log(this);
    }
};
obj.printName.call();
obj.printName2.call(); */

