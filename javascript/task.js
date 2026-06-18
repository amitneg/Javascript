// age=21
// if (age >=10 && age <=20){
//     console.log ("age of a persion lies between 10 and 20");
// }else {
//     console.log ("age of a persion does not lies between 10 and 20");
// }

// number= +,-,0
// number=-1
// if (number  >=0 ){
//     console.log ("positive");
// }else if (number  <= 0){
//     console.log ("negative");
// }else {
//     console.log("zero");
// }

// odd even
// number=10
// if (number %2==0){
//     console.log("even number")
// }else {
//     console.log ("odd number")
// }

// eligible for vote
// age=18
// if (age>=18){
//     console.log("eligible for vote");

// }else{
//     console.log("not eligible for vote")
// }

// leap year
// year=1900
// if (year % 4 === 0 && year % 100 ! == 0) || year % 400 ===0) {
//     console.log("is a leap year")
// }else {
//     console.log ("is a not a leap year")
// }
// largest number
// numA=50
// numB=40
// if (numA >= numB)
//     console.log("largest number is  A")
// else if ("numB >=A"){
//     console.log ("largest number is B")
// } else {
//     console.log("both numbers are equal")
// }

// vowel
// let ch="b"
// if (ch ==="a" || ch === "e"|| ch ==="i" ||ch ==="o" ||ch==="u"){
//     console.log("vowel");
//  } else {
//     console.log("consonent");
// }

//  adult
//  let age=18

// if (age >=18){
//     console.log("adult");
// }else if (age>=13){
//     console.log("teenager");
// }else {
//     console.log("child");
// }

// divisible by5
// let num=10

// if (num 5%== 0 || num 11 %== 0) {
//     console.log("number is divisible by 5 and 11");
// }else {
//   console.log("not divisible");
// }

// switch statement
// let day=3
//  switch (day) {
//     case 1:
//         console.log("monday")
//         break;
//         case 2:
//             console.log ("tuesday")
//             case 3:
//             console.log ("wednesday")
//             case 4:
//             console.log ("thursday")
//             case 5:
//             console.log ("friday")
//             case 6:
//             console.log ("saturday")
//             case 7:
//             console.log ("sunday")
//         default:
//             break;
//             console.log("invalid day")
// }
// let A=5;
// let B=6;
// let op = "+"

// switch ( op ) {
//     case  '+':
//         console.log (A + B);
//     case  '-':
//         console.log (A - B);
//     case  '*':
//         console.log (A * B);
//     case  '%':
//         console.log (A % B);
// }

// let grade='A'

//  switch (grade){
//     case 'A':
//         console.log ( "excellent");
//         break;
//     case 'B':
//             console.log( "good");
//             break;
//     case 'C':
//         console.log ("average");

//  }

// let traficlight = "yellow";

// switch (traficlight) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("start");
//     break;
//   case "green":
//     console.log("go");
// }

// let i=5;
//   for ( let i=1; i <=50; i++) {
//     if (i %5 ===0)
//         console.log(i)
//   }

// let i=5;
// let n=1;
// for (let i=1; i <=5; i++){
// n *= i;

// }
// console.log(n)

// let i=1;
//   for (  i=1; i <=10; i++) {
//     if (i %3!==0)
//         console.log(i)
//   }

// let i = 1;
// for (let i = 1; i <= 16; i++) {
//   if (i % 3 === 0 && i % 5 === 0)
//     console.log("fizzz buzz");
//   else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }
// let i=5;
// for ( i = 0; i <= 50; i++){
//   if (i *=50)
//     console.log("even");
//   //   else if(i *!=50)
//   //   console.log("odd")
//   // else{
//   //   console.log(i)
//   // }
// }

// let str ="amit";
// let reversed= "";
// for ( i =str.length -1; i >=0; i--){
//   reversed +=str[i];

// }
//  console.log(reversed);

// concat

// let name1="amit"
// let name2="rohan"
// // console.log(...name1,...name2)
// console.log(name1.concat(name2))

// let num=[4,5,-3,-4,0,-5,0]
// let positive="";
// let negative="";
// let zero="";
// for(let i=0; i<num.length; i++){
//    if(num[i]>0){
//    positive++
//    }
//    else if(num[i]<0){
//   negative++

//    }
//    else{
//      zero++

//    }
// }
// console.log("Positive:", positive);
// console.log("Negative:", negative);
// console.log("zero", zero);

// let num=[2,3,5,8,9]
// let max=num[0]
// let second=num[0]
// for (let i=0; i<num.length; i++){
// if(num[i]>max){
//   second=max
//   max=num[i]
// }else if(num[i]<second && second<max){
//   second=num[i]
// }

// }
// console.log(second);

// second small@@@@@@@@@@@@@@@@@@@@@@@ second small @@@@@@@@@@@@@@@@@@@@@@

// let num=[23,34,45,56]
// let small=Infinity
// let seSmall=Infinity
// for(let i=0 ; i<num.length; i++){
//     if(num[i]<small){
//         seSmall=small
//         small=num[i]
//     } else if(num[i]<seSmall && num[i]!==small){
//         seSmall=num[i]
//     }
// }
// console.log(small);

// console.log(seSmall);

// let num=[50]
// let sum=num[0]
// for(let i=0; i<num.length; i++){
//   if(num%2===0){
//     sum+=num
//   }
// }

// console.log(sum);

// for(let i=1; i<=10; i++){
// console.log(`3*${i}=${3*i}`);

// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizz", "buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// let sum=0
// for(i=0; i<=100; i++){
//   sum+=i
// }
// console.log(sum);

// let name="amit"
// let rev=""
// for(let i=name.length-1 ; i>=0; i--){
//   rev+=name[i]
// }
// console.log(rev);

// function name(str){
//   let rev=""
//   for(let i=str.length-1; i>=0; i--){
//     rev+=str[i]
//   }
//   return rev
// }
// console.log(name("amit"));

// let num=5;
// let fac=1;
// for(let i=1; i<=num; i++){
//   fac*=i
// }
// console.log(fac);

// let arr=[]
// for(let i=0; i<=10; i++){
//   arr.push(i*i)
// }
// console.log(arr);

// let str="madam"
// let rev=""
// for(let i=str.length-1; i>=0; i--){
//   rev+=str[i]
// }
//   if(rev===str){
//     console.log("palindrom");

//   }else {
//     console.log("not palindrom");

//   }

// let num=[2,3,6,-5,-7,0]
// let p=[];
// let n=[];
// let z=[];
// for(let i=0; i<num.length; i++){
//     if(num[i]>0){
//        p.push(num[i])
//     } else if(num[i]<0){
//         n++
//     }else{
//         z++
//     }
// }

// console.log(p);
// console.log(n);
// console.log(z);

// // rest operator
// let [a,...rest]=[1,2,3,]
// console.log(a);
// console.log(rest);

// spread operator
// let user={
//     name:"amit"
// };
// let updated={
//     ...user,
//     age:24

// };
// let updated2={
//     ...user,
//     ...updated,
//     id:1
// }
// console.log(updated2);

// object destructuring
// let person={
// name:"amit",
// age:20
// }
// let{name, age}=person
// console.log(name);
// console.log(age);

// let arr=[1,2,2,1,3,3,44,5,5,21,2,13,2,2,23,1,2,21]
// let num=[... new Set(arr)]
// console.log(num);

// let num=5;
// let fac=1;
// for(let i=1; i<=num; i++){
//     fac=fac*i
// }
// console.log(fac);

// find missing num
// debugger;
// let arr=[1,2,4,]
// for(let i=0; i<arr.length; i++){
//     if(arr[i+1]-arr[i] !==1){
//         console.log(arr[i]+1);
//     }

// }

// let arr = [1, 2, 3, 5, 7, 13];

// for (let i = 0; i < arr.length - 1; i++) {
//     let next = arr[i] + 1;

//     while (next < arr[i + 1]) {
//         console.log(next);
//         next++;
//     }
// }
// add++++++++++
// let nums=[1,2,3,4];
// let newvalue = nums.reduce((acc,crr)=> acc+crr,0);
//     console.log(newvalue);

// let num=[1,2,3,4]
// let sum=0
// for(let i=0; i<num.length; i++){
//     sum+=num[i]
// }
// console.log(sum);

// let str="amit"
// let count=0;
// for(let i=0; i<str.length; i++){
//     let ch=str[i].toLowerCase();
//     if(ch==="a" || ch==="e" || ch==="i" || ch==="o"|| ch==="u"){
//         count++
//     }
// }
// console.log(count);

// let str="amit"
// let vowel="aeiou"
// let count=0
// for(let i=0; i<=str.length; i++){
//     if(vowel.includes (str[i])){
//         count++
//     }
// }
// console.log(count);

// let str = "amit singh negi";
// let words = str.split(" ");
// let result = "";
// for (let i = 0; i < words.length; i++) {
//   result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
// }
// console.log(result.trim());

// let num=2
// switch(num){
//     case 1:
//         console.log("monday");
//         break;
//         case 2:
//             console.log("tuesday");
//             break;

// }

// let year=202
// if(year%4===0 && year% 100 !==0 && year %400===0 ){
//     console.log(`${year} is leap year`);

// }else{
//     console.log(`${year} is not leap year`);

// }

// sort array********************* built -in
// let arr = [5, 2, 8, 1, 3];

// arr.sort((a, b) => a - b);

// console.log(arr);

// without built-in

// let arr = [1, 4, 6, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let num = arr[i];
//       arr[i] = arr[j];
//       arr[j] = num;
//     }
//   }
// }
// console.log(arr);
// ******************************reversed in function*******************
// function reverse(str){
//     let reversed="";
//     for(let i=str.length-1; i>=0; i--){
//         reversed+=str[i];
//     }
//     return reversed;
// }
// let str="amit"
// console.log(reverse(str));

// function reverseString(str) {
//     let reversed = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }

// console.log(reverseString("amit"));

// ++++++++++***********find duplicate*******************
// let arr=[1,2,3,2,1,4,4]
// for (let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]===arr[j])
//             console.log(arr[i]);

//     }
// }

// ##############.   anagram.   #############################################

// function isAnagram(str1, str2) {
//   return str1.split("").sort().join("") ===   str2.split("").sort().join("");
// }

// console.log(isAnagram("listen", "silent"));

// let str="amit singh negi"
// let words=1;
// for(let i=0; i<str.length; i++){
//    if(str[i]===" "){
//       words++
//    }

// }

// console.log(words);
// console.log(str.length);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@ MOVE ZERO TO LAST @@@@@@@@@@@@@@@@@@@@@@@@@@@

// let arr = [1, 0, 2, 0, 3, 4, 0];
// let index = 0;

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] !== 0) {
//         arr[index] = arr[i];
//         index++;
//     }
// }

// while(index < arr.length) {
//     arr[index] = 0;
//     index++;
// }

// console.log(arr);

// @@@@@@@@@@@@@ flatten nested array without in built @@@@@@@@@@@@@@@@@@@@@@@@

// let arr = [1, [2, 3], 4, [5, 6]];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     for (let j = 0; j < arr[i].length; j++) {
//       result.push(arr[i][j]);
//     }
//   } else {
//     result.push(arr[i]);
//   }
// }

// console.log(result);

// -------------------reverse a word in a sentence-------------------

// let sentence = "Hello World JavaScript";
// let words = sentence.split(" ");
// let result = "";

// for (let i = 0; i < words.length; i++) {
//     let reversed = "";

//     for (let j = words[i].length - 1; j >= 0; j--) {
//         reversed += words[i][j];
//     }

//     result += reversed;

//     if (i < words.length - 1) {
//         result += " ";
//     }
// }

// console.log(result);

// ---------------------------fetch data-------------------------

// async function userData() {
//    let response=await fetch("https://jsonplaceholder.typicode.com/users/1")
//    let data =await response.json()
//    console.log(data);

// }
// userData()






// let str ="amit singh negi"
// let words= str.split(" ")
// let result =" "
// for (let i=0; i<words.length; i++){
//     let reversed= " ";
//     for(let j=words[i].length-1; j>=0; j--){
//         reversed+=words[i][j]
//     }
//     result+=reversed;
//     if(i<words[i].length-1)
//         result+=" "
// }
// console.log(result);




// async function userData() {
//    let response=await fetch("https://jsonplaceholder.typicode.com/users/1")
//    let data =await response.json()
//    console.log(data);

// }
// userData()



