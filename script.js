console.log("************ Grundläggande övningar **************");
console.log("************ Looping a triangle **************");
let abc = "";

for (i = 1; i <= 7; i++) {
  abc += "#";
  console.log(abc);
}
console.log(abc.length);

console.log("************ FizzBuzz **************");

let number = 0;

for (i = 1; i <= 15; i++) {
  number++;
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else console.log(number);
}

console.log("************ Chessboard **************");

function chessboard(width, height) {
  let chassString1 = "";
  let chassString2 = "";

  for (i = 1; i <= width; i++) {
    if (i % 2 == 0) {
      chassString1 += "#";
      chassString2 += " ";
    } else {
      chassString1 += " ";
      chassString2 += "#";
    }
  }

  for (i = 1; i <= height; i++) {
    i % 2 == 0 ? console.log(chassString2) : console.log(chassString1);
  }
}

chessboard(9, 9);

console.log("************ Funktion övningar **************");
console.log("************ Minimum **************");
function min(a, b) {
  return Math.min(a, b);
}

console.log(min(0, -10));

console.log("************ Recursion **************");

function isEven(n) {
  if (n / 2 == 1 || n == 0) return true;
  else if (n == 1) return false;
  else if (n > 1) return isEven(n - 2);
  else return isEven(n + 2);
}

console.log(isEven(-156));

console.log("************ Bean counting **************");

function countBs(str, char = "B") {
  let count = 0;
  let foundChar = 0;

  function isItRightChar(strChar) {
    if (strChar == char) foundChar++;
  }

  while (str.length > count) {
    isItRightChar(str[count]);
    count++;
  }

  return foundChar;
}

console.log(countBs("kakkerlak", "k"));

console.log("************ Arrayer övningar **************");
console.log("************ The sum of a range **************");

function range(a, b, c = 1) {
  let myArrey = [a];
  if (a < b && c > 0) {
    while (myArrey[myArrey.length - 1] <= b - c) {
      myArrey.push(myArrey[myArrey.length - 1] + c);
    }
  } else if (a > b && c < 0) {
    while (myArrey[myArrey.length - 1] >= b - c) {
      myArrey.push(myArrey[myArrey.length - 1] + c);
    }
  } else myArrey = NaN;
  return myArrey;
}

function sum(arrey) {
  let sum = 0;
  let a = 0;
  while (a < arrey.length) {
    sum += arrey[a];
    a++;
  }
  return sum;
}

console.log(sum(range(1, 10)));

console.log("************ Reversing an array **************");

function reverseArray(myArrey) {
  return myArrey.toReversed();
}
console.log(reverseArray([1, 2, 3, 4, 5]));

let arrayValue = [5, 6, 7, 8, 9];
function reverseArrayInPlace(array) {
  array.reverse();
}
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
