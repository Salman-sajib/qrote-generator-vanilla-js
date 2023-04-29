let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Ask not what your country can do for you; ask what you can do for your country."`,
    person: `John F. Kennedy`,
  },
  {
    quote: `"In the face of impossible odds, people who love this country can change it."`,
    person: `Barack Obama`,
  },
  {
    quote: `"Democracy transformed from thin paper to thick action is the greatest form of government on earth."`,
    person: `Martin Luther King Jr.`,
  },
  {
    quote: `"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
    person: `Winston S. Churchill`,
  },
  {
    quote: `"Try not to become a man of success. Rather become a man of value."`,
    person: `Albert Einstein`,
  },
  {
    quote: `"Success is stumbling from failure to failure with no loss of enthusiasm."`,
    person: `Winston S. Churchill`,
  },
  {
    quote: `"Don't spend time beating on a wall, hoping to transform it into a door."`,
    person: `Coco Chanel`,
  },
  {
    quote: `"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid."`,
    person: `Jane Austen`,
  },
  {
    quote: `"I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else."`,
    person: `C.S. Lewis`,
  },
  {
    quote: `"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart."`,
    person: `Roy T. Bennett`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
