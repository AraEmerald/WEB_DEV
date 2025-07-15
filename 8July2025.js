<<<<<<< HEAD
// ERROR HANDLING 

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise1");
//     },2000);
// });

// promise1.then((res)=>console.log(res))
// .then(()=>{
//     setTimeout(()=>{
//         console.log("P2");
//     },4000);
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("P3");
//     },1000);
// })
// .catch((err)=> console.log("error: ",err));


//if we want to print it in series then we have to make different promises 


// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 resolved");
//     },2000);
// });

// const myPromise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 resolved");
//     },5000);
// });

// const myPromise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 3 resolved");
//     },3000);
// });


// myPromise.then((res)=>{
//     console.log(res);
//     myPromise2.then((res)=>{
//         console.log(res);
//         myPromise3.then((res)=>{
//             console.log(res);
//         })
//     })
// });


// PROMISE API

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve("PROMISE 1 SUCCESSFUL");
//         } else {
//             reject("PROMISE 1 FAILED");
//         }
//     }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false;
//         if (success) {
//             resolve("PROMISE 2 SUCCESSFUL");
//         } else {
//             reject("PROMISE 2 FAILED");
//         }
//     }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve("PROMISE 3 SUCCESSFUL");
//         } else {
//             reject("PROMISE 3 FAILED");
//         }
//     }, 5000);
// });


// // fails once any one promise fails 
// Promise.all([promise1, promise2, promise3])
//   .then((results) => console.log("Promise.all results:", results))
//   .catch((err) => console.log("Promise.all error:", err));


// // shows status of all promises  
// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => console.log("Promise.allSettled results:", results));


// // shows the first
// Promise.race([promise1, promise2, promise3])
//   .then((result) => console.log("Promise.race result:", result))
//   .catch((err) => console.log("Promise.race error:", err));


// // shows firt fullfilled
// Promise.any([promise3, promise1, promise2])
//   .then((result) => console.log("Promise.any result:", result))
//   .catch((err) => console.log("Promise.any error:", err));



// ASYNC 

// const assignment = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Assignment completed");
//         console.log("Assignment completed");
//     },4000);
// });


// async function assignmentEval()
// {
//     var assignmentDetail = await assignment;
//     console.log("checking assignment: ", assignmentDetail);
// }

///////////////////////

// dummy data 

// async function apiData(){
//     const data= await fetch('https://dummyjson.com/users')
//     const myData= await data.json();
//     console.log(myData);
// }

// apiData();

////////////////////////////

// call()

function assignmentSubmissionData(){
    console.log(`Student Name: ${this.studentName}, Batch: ${this.batchNo}`);
}

const student1={
    studentName: "Abhishek",
    batchNo: "G6"
}

const student2={
    studentName: "Abhi",
    batchNo: "G7"
}

assignmentSubmissionData.call(student1);
assignmentSubmissionData.call(student2);




=======
// ERROR HANDLING 

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise1");
//     },2000);
// });

// promise1.then((res)=>console.log(res))
// .then(()=>{
//     setTimeout(()=>{
//         console.log("P2");
//     },4000);
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("P3");
//     },1000);
// })
// .catch((err)=> console.log("error: ",err));


//if we want to print it in series then we have to make different promises 


// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 resolved");
//     },2000);
// });

// const myPromise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 resolved");
//     },5000);
// });

// const myPromise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 3 resolved");
//     },3000);
// });


// myPromise.then((res)=>{
//     console.log(res);
//     myPromise2.then((res)=>{
//         console.log(res);
//         myPromise3.then((res)=>{
//             console.log(res);
//         })
//     })
// });


// PROMISE API

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve("PROMISE 1 SUCCESSFUL");
//         } else {
//             reject("PROMISE 1 FAILED");
//         }
//     }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false;
//         if (success) {
//             resolve("PROMISE 2 SUCCESSFUL");
//         } else {
//             reject("PROMISE 2 FAILED");
//         }
//     }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve("PROMISE 3 SUCCESSFUL");
//         } else {
//             reject("PROMISE 3 FAILED");
//         }
//     }, 5000);
// });


// // fails once any one promise fails 
// Promise.all([promise1, promise2, promise3])
//   .then((results) => console.log("Promise.all results:", results))
//   .catch((err) => console.log("Promise.all error:", err));


// // shows status of all promises  
// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => console.log("Promise.allSettled results:", results));


// // shows the first
// Promise.race([promise1, promise2, promise3])
//   .then((result) => console.log("Promise.race result:", result))
//   .catch((err) => console.log("Promise.race error:", err));


// // shows firt fullfilled
// Promise.any([promise3, promise1, promise2])
//   .then((result) => console.log("Promise.any result:", result))
//   .catch((err) => console.log("Promise.any error:", err));



// ASYNC 

// const assignment = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Assignment completed");
//         console.log("Assignment completed");
//     },4000);
// });


// async function assignmentEval()
// {
//     var assignmentDetail = await assignment;
//     console.log("checking assignment: ", assignmentDetail);
// }

///////////////////////

// dummy data 

// async function apiData(){
//     const data= await fetch('https://dummyjson.com/users')
//     const myData= await data.json();
//     console.log(myData);
// }

// apiData();

////////////////////////////

// cal()

function assignmentSubmissionData(){
    console.log(`Student Name: ${this.studentName}, Batch: ${this.batchNo}`);
}

const student1={
    studentName: "Abhishek",
    batchNo: "G6"
}

const student2={
    studentName: "Abhi",
    batchNo: "G7"
}

assignmentSubmissionData.call(student1);
assignmentSubmissionData.call(student2);
>>>>>>> 1451b225595424d7b63571a7f51d2752a735f78d
