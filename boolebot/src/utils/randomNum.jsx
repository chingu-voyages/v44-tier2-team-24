// //will generate random number from tile from 0 > x <= tile

export default function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}
