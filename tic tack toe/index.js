// const mytext = document.getElementById("my text");
// const mysubmit = document.getElementById("mysubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mysubmit.onclick = function() {

//     age=mytext.Value;
//     age= Number(age);
//     if(age>=100){
//     resultElement.textContent='you are Too old to enter this site'
//     }
//     else if (age==0){
//     resultElement.textContent='you canot enter.you were just born';
//     }
//     else if (age>=18){
//     resultElement.textContent='you are old enough to enter this site';
//     }
//     else if (age<0){
//     resultElement.textContent='your age cannot be below 0';
//     }
//     else{
//         resultElement.textContent= 'you must be 18+to enter this site';
//     }

// }

const myButton = document.getElementById("myButton");
const mylabel = document.getElementById("mylabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function () {
  randomNum = math.floor(math.random() * max) + min;
  mylabel.textcontent = randomNum;
};

function randomnumber() {
  math.random(0, 100);
}
