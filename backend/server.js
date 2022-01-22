const { request } = require("express");
const express = require("express");

var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/:number", function (req, res) {
  const requestInteger = req.params.number;
  console.log(requestInteger);
});

function sieveOfEratosthenes(n) {
  // Eratosthenes algorithm to find all primes under n
  const array = [];
  const upperLimit = Math.sqrt(n);
  const output = [];

  // Make an array from 2 to (n - 1)
  for (let i = 0; i < n; i++) {
    array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (let j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  // All array[i] set to true are primes
  for (var i = 2; i < n; i++) {
    if (array[i]) {
      output.push(i);
    }
  }

  return output;
}
