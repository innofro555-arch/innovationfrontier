import { add, multiply } from "../src/calc.js";


function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message} | actual: ${actual}, expected: ${expected}`);
  }
}

try {
  assertEqual(add(2, 3), 5, "add should work");
  assertEqual(multiply(2, 3), 6, "multiply should work"); // 失敗する想定
  console.log("All tests passed ✅");
} catch (e) {
  console.error("Test failed ❌:", e.message);
  process.exit(1);
}
