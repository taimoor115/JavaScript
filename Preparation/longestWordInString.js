const str = "I love javscript";

function longestWordInString(str) {
  let words = str.split(" ");
  console.log(words);
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

longestWordInString(longestWordInString(str));
