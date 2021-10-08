// Print elements of array using while & do while
let arr= ["Himanshu", "Rohit", "Viplav", "Diane", "Sumedh"];

console.log(arr[0]);
console.log(arr.length);

// // for loop of an array
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// while loop
let x = 0;
while (x<arr.length){
     console.log(arr[x]);
     x++;
}

// do while loop
let y=0;
do{
    console.log(arr[y]);
    y++;
} while (y<arr.length)




// Rewrite the grade example in if else if using ternary operator

let marks="85";
let grade= (marks>=75 && marks<=100)? "A"
          :(marks>=60 && marks< 75)? "B"
          :(marks>=35 && marks< 60)? "C"
          :"D";

    console.log('The candidate has scored ${marks} marks and secured ${grade} grade');

