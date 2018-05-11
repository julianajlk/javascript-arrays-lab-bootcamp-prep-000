const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens;
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(kitten) {
  var kittensSecond = [...kittens, kitten];
  return kittensSecond;
}

function prependKitten(kitten) {
  var kittensSecond = [kitten, ...kittens];
  return kittensSecond;
}

function removeLastKitten(kitten) {
  return kitten.slice(0, kitten.length -1);
}
