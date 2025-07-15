// DEBOUNCING

// technique to make sure that a function is not called to many times in a short period of time.
// used to prevent function from being called multiple times when user is typing in a textbox or clicking a button.

// controlling number of calls to optimise solution. basically making optimistic calls to invoke function.


// // search letter by letter

// console.log("SCRIPT START");

// const searchinput = document.getElementById("searchInput");

// searchinput.addEventListener("input",(event)=>{
//     console.log("INPUT WORD: ",event.target.value)
// })


// // take the whole word as input

console.log("SCRIPT START");

const searchinput = document.getElementById("searchInput");

searchinput.addEventListener("input",(event)=>{
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        console.log("INPUT WORD: ",event.target.value)
    },2000);   
})


