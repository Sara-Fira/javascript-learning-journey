let count = 0;

function cardCounter(card) {
if (card === 2) {
  count = count + 1;
} else if (card === 3) {
  count = count + 1
 } else if (card === 4) {
  count = count + 1 
 } else if (card === 5) {
  count = count + 1
 } else if (card === 6) {
  count = count + 1
 } else if (card === 7) {
  count = count;
 } else if (card === 8) {
  count = count;
 } else if (card === 9) {
  count = count;
 } else if (card === 10) {
  count = count - 1;
 } else if (card === "J") {
  count = count - 1;
 } else if (card === "Q") {
  count = count - 1;
 } else if (card === "K") {
  count = count - 1;
 } else if (card === "A") {
  count = count - 1;
 }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

}
