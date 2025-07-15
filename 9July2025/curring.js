// //CURRYING FUNCTION -> way to pass singlr argument or parameter at a time

//  function sumofthreeNumbers (a,b,c) {
//     console.log(a+b+c);
//     return a+b+c;
//  }
//  sumofthreeNumbers(2,4,6);

// // SUBWAY

// function subwayOrder(bread, patty, cheese) {
//     console.log(MY BREAD ${bread} with PATTY: ${patty} CHEESE: ${cheese});
// }

// //CURRYING IN JS

// function subwayOrder2(bread) {
//     return function (patty) {
//         return function (cheese) {
//             console.log(MY BREAD ${bread} with PATTY: ${patty} CHEESE: ${cheese})
//         }
//     }
// }

// subwayOrder2("ORIGANO")("CHICKEN")("WITH CHEESE");

//EVENT LISTENERS
//DOM -> DOCUMENT OBJECT MODEL
//IT IS A TREE LIKE STRUCTURE OF ELEMENTS

const container1 = document.getElementById("container");

container1.addEventListener("click",()=>{
    console.log("THIS IS THE CONTAINER 1")
})


//EVENT BUBBLING AND CAPTURING

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click",()=> {
    console.log("Grandparent clicked");
},true)

parent.addEventListener("click",()=>{
    console.log("Parent clicked");
},true)

child.addEventListener("click",()=>{
    console.log("Child clicked");
},true)

//EVENT LISTENERS ARE VERY EXPENSIVE