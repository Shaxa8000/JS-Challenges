//<< FINDING EVEN POSITIONED ELEMENTS>>>


// const getItemsAt = (array) => {
//     let arr = [];
//     for (let i = 0; i <= array.length; i++) {
//         if (i % 2 === 0) {
//             arr.push(array[i]);
//         }
//     }
//     return arr;
// }

// console.log(getItemsAt([2, 4, 6, 8, 10]));// => [2, 6, 10];


//<<<< FINDING ODD POSITIONED NUMBERS>>>


// const getItemsAt = (arr) => {
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 !== 0) {
//             array.push(arr[i])
//         }
//     }
//     return array
// }

// console.log(getItemsAt(["E", "D", "A", "B", "I", "T"]));  => ['D', 'B', 'T']



//<<< FINDING THE LONGEST WORD IN STRING>>>


// const findLongest = (str) => {
//     var longestWord = str.split(' ')
//     return longestWord.sort((a, b) => b.length - a.length)[0];
// }

// console.log(findLongest('The quick brown fox jumped over the lazy dog'));  => jumped


//<<< ARRAY TO STRING>>>


// var array = (['a', 'b', 'c', 'd', 'e', 'f']);
// var string = array.join('');

// console.log(string);


//<<< ARRAY>>>>

//<<< Getting total price>>>

// shopping = [
//     { product: 'Milk', quantity: 1, price: 1.50},
//     { product: "Cereals", quntity: 1, price: 2.50 }];
    
// const pro = shopping.reduce((total, val) => {
//         return total.price + val.price
// })
    
// console.log(pro); => 4



// <<< FINDING SUM OF even POSITIONED ARRAY ELEMENTS>>>

// const array = [15, 15, 10, 31, 12];
// var total = 0;

// for (let i = 0; i < array.length; i+=2) {
//     total+= array[i]
// }

// console.log(total);


//<<<< FINDING THE MOST EXPENSIVE>>>


// let items = [
//   {
//     itemName: 'Effective Programming Habits',
//     type: 'book',
//     price: 13.99,
//   },
//   {
//     itemName: 'Chromebook 2',
//     type: 'computer',
//     price: 399.99,
//   },
//   {
//     itemName: 'Programming 101',
//     type: 'book',
//     price: 15.0,
//   },
// ];

// let mostExpensive = items.reduce((maximum, minimum) => {
//     if (maximum.price > minimum.price) {
//         return maximum
//     } else {
//         return minimum
//     }
// });

// console.log(mostExpensive)


//<<<< CHECKING ARRAY OR NOT>>>

// const isArray = array => {
//     if (typeof array === typeof []) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(isArray([23, 45]));
// console.log(isArray(23, 45));


// <<< CLONING ARRAY>>>


// const arrayClone = (arr) => {
    // return arr.slice(0);
// }

// console.log(arrayClone([1, 2, 3, 4]));


//<<< ARRAY TO STRING>>>


// var myColor = ['Red', 'Green', 'White', 'Black'];

// var toString = myColor.join();
// var toString = myColor.toString();
// var toString = myColor.join('+');

// console.log(toString);



//<<< SORTING ARRAY >>> 

// var arr = [2, 5, 1, 3, 7, 9, -2];
// var arr2 = arr.sort((a, b) => a - b);

// console.log(arr2);


//SORTING ARRAY TEXT


// var fruits = ['Orange', 'Apple', 'Mango'];

// var sorted = fruits.sort((a, b) => a.localeCompare(b));

// console.log(sorted);



//<<< MOST FREQUENT ITEM OF AN ARRAY>>>


// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a'];

// let mf = 1;
// let m = 0;
// let item;

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//         if (arr1[i] == arr1[j]) {
//             m++;
//         } else if (mf < m) {
//             mf = m;
//             item = arr1[i];
//        }
//     }
//     m = 0;
// }

// console.log(`${item} (${mf} times)`);



//<<< NESTED ARRAYS >>>

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (let i in a) {
//     console.log('row ' + i);
//     for (let j in a[i]) {
//         console.log(' ' + a[i][j]);
//     }
// }


//<<< First element in array >>>

// const getFirstValue= (arr) =>{
//     return arr[0];
// }

// console.log(getFirstValue([1, 2, 3])); =>1
// console.log(getFirstValue([2, 5, 6]));=>2


//<<<<>>>
// const getVoteCount = {
//     upvotes: 13,
//     downvotes: 2
// }

// const obj = (num1, num2) => {
//     return getVoteCount.upvotes - getVoteCount.downvotes;
// };

// console.log(obj()); => 


//<<<<<>>>>>>


// unnamed
// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// // output: "Rectangle"

// // named
// let Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// // output: "Rectangle2"



// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100


// Odd and Even numbers


// for (let i = 0; i <= 100; i++) {
//     if (i === 0) {
//         console.log(i + " is even")
//     } if (i % 2 === 0) {
//         console.log(i + " is even")
//     } else {
//         console.log(i + " is Odd");
//     }
// }

//  ADDING REVERSED AND DEFAULT VALUE
// reversStr = (str) => {
//     var strSplit = str.split("");
//     var strReverse = strSplit.reverse();
//     var strJoin = strReverse.join('');
//     var strConcat = strJoin.concat(str);
//     return strConcat
// }
// console.log(reversStr("Hello"));














