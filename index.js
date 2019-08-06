// Code your solutions in this file
function writeCards (names, occasion) {
  for ( let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
}

function countdown (number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
