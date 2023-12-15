// const quotesData = {
//     quotes: [
//       {
//         text: "The only way to do great work is to love what you do.",
//         author: "Steve Jobs",
//       },
//       {
//         text: "In three words I can sum up everything I've learned about life: it goes on.",
//         author: "Robert Frost",
//       },
//       {
//         text: "Believe you can and you're halfway there.",
//         author: "Theodore Roosevelt",
//       },
//       {
//         text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//         author: "Winston Churchill",
//       },
//       {
//         text: "The only limit to our realization of tomorrow will be our doubts of today.",
//         author: "Franklin D. Roosevelt",
//       },
//       {
//         text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
//         author: "Nelson Mandela",
//       },
//       {
//         text: "It is during our darkest moments that we must focus to see the light.",
//         author: "Aristotle",
//       },
//       {
//         text: "Life is what happens when you're busy making other plans.",
//         author: "John Lennon",
//       },
//       {
//         text: "The purpose of our lives is to be happy.",
//         author: "Dalai Lama",
//       },
//       {
//         text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
//         author: "Brian Tracy",
//       },
//       {
//         text: "Don't watch the clock; do what it does. Keep going.",
//         author: "Sam Levenson",
//       },
//       {
//         text: "It's not whether you get knocked down, it's whether you get up.",
//         author: "Vince Lombardi",
//       },
//       {
//         text: "The best way to predict the future is to create it.",
//         author: "Peter Drucker",
//       },
//       {
//         text: "Don't count the days, make the days count.",
//         author: "Muhammad Ali",
//       },
//       {
//         text: "Life is 10% what happens to us and 90% how we react to it.",
//         author: "Charles R. Swindoll",
//       },
//     ],
  // };

  


  let text = document.querySelector(".quote");
  let author = document.querySelector(".person");
  let btn = document.getElementById("nextQuote");

  
  async function fetchRandomQuote(){
    try{
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      
      text.innerText = data.content;
      author.innerText = data.author;
    }catch(error){
      console.error('Error fetching quote:', error);
    }
  }
  
  btn.addEventListener("click", fetchRandomQuote);

  fetchRandomQuote()