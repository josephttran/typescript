let myVoid: void;
let myNull: null;
let myUndefined: undefined;
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;
let strArr: string[];
let numArr: Array<number>;
let tupleNumStr: [string, number];

myVoid = null;
myVoid = undefined;
myNull = null;
myNull = undefined;
myUndefined = null;
myUndefined = undefined;

myString = 'Hello Universe';
myNum = 20;
myBool = true;
myVar = 5.55;

strArr = ['Hello', 'Type'];
numArr = [0, 1, 2, 3];
tupleNumStr = ['Hi', 2]

myString = myString.slice(6, myString.length);

console.log(myString);
document.body.innerHTML = myString;
