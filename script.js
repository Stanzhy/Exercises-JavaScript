let abc = "";

for (i = 1; i <= 7; i++) {
  abc += "#";
  console.log(abc);
}
console.log(abc.length);

console.log("************ Nästa övning **************");

let number = 0;

for (i = 1; i <= 100; i++) {
  number++;
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else console.log(number);
}

console.log("************ Nästa övning **************");

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
