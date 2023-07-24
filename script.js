const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
  "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
  "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
]

const images = [
  "Nelson_Mandela.jpg",
  "Walt_Disney.jpeg",
  "Eleanor_Roosevelt.jpg",
  "John_Lennon.jpg",
  "Franklin_D._Roosevelt.jpg",
  "Robert_Louis_Stevenson.jpg",
  "Aristotle.jpg",
  "Maya_Angelou.jpg",
  "Babe_Ruth.jpg",
]

function setQuote() {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const image = document.getElementById('image')
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quoteParts = randomQuote.split(' - ');

  const randomImage = images[randomIndex];
  image.src = randomImage;

  console.log(quoteParts);
  quote.innerHTML = quoteParts[0];
  author.innerHTML = `- ${quoteParts[1]}`;

}