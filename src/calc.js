export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  // BUG: 本来は a * b
  return a + b;
}
