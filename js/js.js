


$.getJSON('https://api.quotable.io/random', function (data) {
  console.log(data);

  var quotes = data.content;
  
  var author = data.author;

	$('#quotes').append(quotes);
	
	$('#author').append(author);

})

// const quotes = document.getElementById("quotes");
// const author = document.getElementById("author");
// const genbtn = document.getElementById("genbtn");
// let realData = "";


// const getNewQuotes = () => {
// 	let rnum = Math.floor(Math.random() * 10);
// 	quotes.innerText = `${realData[rnum].text}`;
// 	author.innerText = `${realData[rnum].author}`;

// };
// 	const getQuotes = async () => {
	
// 		const api = "https://type.fit/api/quotes";

// 		try{ 
// 			let data = await fetch(api);
// 			realData = await data.json();

// 		getNewQuotes();
// 	} catch (error) {}
// };

// genbtn.addEventListener('clicks')
// getQuotes()

