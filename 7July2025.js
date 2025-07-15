// let userData = [
//     {
//         firstName: "Punal",
//         age: 20
//     },
//     {
//         firstName: "Kashish",
//         age: 28
//     },
//     {
//         firstName: "Prayag",
//         age: 24
//     },
//     {
//         firstName: "Deepak",
//         age: 22
//     },
// ]

// userData.filter((user) => user.age >20).map((user) => {
//     console.log(user.firstName);
// });


//PROMISE

// const myPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("Punal got the placement!!")
//     },3000);
// });

// //1. Withdraw salary => 2. Work 9-5 => Weekend -> Learning New Tech => 4 Sleep Layoff

// const data = myPromise
// .then((res)=> console.log(res))
// .then(
//     console.log("Punal getting 1Cr")
// )
// .then(
//     console.log("Punal working 9-5")
// )
// .then(
//     console.log("Layoff")
// )
// .catch((err)=> console.log(err));


// console.log(myPromise);

// const myPromise1 = new Promise((resolve, reject) => {
//     resolve("Punal got the placement");
// });

// const myPromise2 = new Promise((resolve, reject) => {
//     resolve("Punal got 1 CR package");
// });


// const myFinalData2 = myPromise2



const promise1 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("PROMISE 1 SUCCESSFULL");
    },3000)
});

const promise2 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("PROMISE 2 SUCCESSFULL");
    },2000)
});

const promise3 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("PROMISE 3 SUCCESSFULL");
    },5000)
});

const promise4 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("PROMISE 4 SUCCESSFULL");
    },6000)
});

Promise.all([promise1, promise2, promise3, promise4])
  .then((results) => console.log("Promise.all results:", results))
  .catch((err) => console.log("Promise.all error:", err));

Promise.allSettled([promise1, promise2, promise3, promise4])
  .then((results) => console.log("Promise.allSettled results:", results));

Promise.race([promise1, promise2, promise3, promise4])
  .then((result) => console.log("Promise.race result:", result))
  .catch((err) => console.log("Promise.race error:", err));

Promise.any([promise3, promise1, promise2, promise4])
  .then((result) => console.log("Promise.any result:", result))
  .catch((err) => console.log("Promise.any error:", err));


//1. All resolve
//2. All reject
//3. 2 resolve reject