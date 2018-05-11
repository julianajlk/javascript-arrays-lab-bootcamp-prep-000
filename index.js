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
  var kittensSecond = kittens.slice(0, kittens.length -1);
  return kittensSecond;
}
