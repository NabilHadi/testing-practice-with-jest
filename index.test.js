import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("capitalize function returns first character capitalized", () => {
  expect(capitalize("hello world")).toEqual("Hello world");
  expect(capitalize("hello")).toEqual("Hello");
});

test("reverseString function returns string reversed", () => {
  expect(reverseString("Hello")).toEqual("olleH");
  expect(reverseString("dlrow")).toEqual("world");
});

test("calculator object's methods return correct results", () => {
  // Adding
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(2, 4)).toBe(6);

  // subtracting
  expect(calculator.subtract(6, 4)).toBe(2);
  expect(calculator.subtract(3, 4)).toBe(-1);

  // dividing
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(5, 2)).toBeCloseTo(2.5);

  // multiplying
  expect(calculator.multiply(5, 5)).toBe(25);
  expect(calculator.multiply(5, -5)).toBe(-25);
});

test("caesarCipher function returns correct result", () => {
  // works with small letters
  expect(caesarCipher("a")).toEqual("b");
  expect(caesarCipher("aa")).toEqual("bb");

  // works with capital letters
  expect(caesarCipher("A")).toEqual("B");
  expect(caesarCipher("CC")).toEqual("DD");

  // Wraps letter z to a
  expect(caesarCipher("z")).toEqual("a");
  expect(caesarCipher("Z")).toEqual("A");

  // Works with long words
  expect(caesarCipher("aaaaaa")).toEqual("bbbbbb");
  expect(caesarCipher("AaBbCcDd")).toEqual("BbCcDdEe");

  // Ignores non-letter characters
  expect(caesarCipher("Aaaa!")).toEqual("Bbbb!");
  expect(caesarCipher(".Aaaa.")).toEqual(".Bbbb.");
  expect(caesarCipher(".Aa,a,a.!")).toEqual(".Bb,b,b.!");

  // works with senteces
  expect(caesarCipher("attack at dawn")).toEqual("buubdl bu ebxo");
  expect(caesarCipher("Hello world!")).toEqual("Ifmmp xpsme!");
});

test("analyzeArray function returns correct results", () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj.average).toBe(4);
  expect(obj.min).toBe(1);
  expect(obj.max).toBe(8);
  expect(obj.length).toBe(6);

  const obj2 = analyzeArray([1, 2, 3]);
  expect(obj2.average).toBe(2);
  expect(obj2.min).toBe(1);
  expect(obj2.max).toBe(3);
  expect(obj2.length).toBe(3);
});
