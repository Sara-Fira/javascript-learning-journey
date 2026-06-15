function confirmEnding(str, target) {
  let ending = str.slice(str.length - target.length);

  return ending === target;
}
