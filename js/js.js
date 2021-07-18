
// const author = document.querySelector("#author");
// const quote = document.querySelector("#quote");

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", genQuote);

//   function getQuote(){

//       fetch('https://api.quotable.io/random')
//         .then(response => response.json())
//         .then(data => {
//           console.log(data)
//         })

//     }  

const quote = document.querySelector("#quote");

const author = document.querySelector("#author");

const btn = document.querySelector("#btn");

btn.addEventListener("click", genQuote);

function genQuote(){

  fetch("https://animechan.vercel.app/api/random")
  .then(res => res.json())
  // .then(data => console.log(data))
  // .then(data => console.log(data))
  .then(data => { 

    
    
    quote.innerHTML = `"${data.quote}"`;

    author.innerHTML = `"${data.character}"`;

    
})
}

