const sentence = "hello there from lighthouse labs";

let position = 0;

const typewriter = function(sentence) {

  if (position < sentence.length) {
    process.stdout.write(sentence[position]);
    position++;
    setTimeout(() => typewriter(sentence, position), 75);
  } else {
    console.log();
  }
};

typewriter(sentence);