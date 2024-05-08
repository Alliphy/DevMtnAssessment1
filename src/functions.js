// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y
}


// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x + y) / 2;
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the absolute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {

  if (x - y < 0.001) {
    return true;
  }
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
// function fullName(firstName, lastName) {

// }
const fullName = (first, last) => {
  return `${first} ${last}`;
}
console.log(fullName("Billy", "Smith"))


// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'

function generateSentence(person, beverage, location) {
  return `${person} was drinking ${beverage} at ${location}.`;
}

// Return the given string with all vowels replaced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'


function censorVowels(string) {
  // establish vowels
  const vowels = "aeiouAEIOU";

  // replace your vowels using an arrow function
  const replaceVowels = char => (vowels.includes(char) ? "*" : char);

  // return split string and join the replaced vowels to string
  return string.split("").map(replaceVowels).join("");

}

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'


function stickyCase(string) {

  // define my function to change upper and lower case characters via their index
  const convertCase = (char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase());

  return string.split("").map(convertCase).join("");
}





// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {

  // using the map method i am going to change the value of each letter
  const leetChar = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5",
    t: "7",
  };

  // return the value of the new string with replaced characters. accounting for possible characters being input as capitals
  return string.split("").map(char => leetChar[char.toLowerCase()] || char).join("")
}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
