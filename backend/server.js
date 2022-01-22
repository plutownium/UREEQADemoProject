const { request } = require("express");
const express = require("express");

const app = express();

const port = 8080;

// Respond with "hello world" when a GET request is made to the homepage
app.get("/:number", function (req, res) {
  const requestedInteger = req.params.number;
  const primes = sieveOfEratosthenes(requestedInteger);
  const median = getMedianNumbers(primes);
  // This line allows the frontend and backend to talk to each other despite having different origins.
  // It is crucial to communication.
  res.header("Access-Control-Allow-Origin", "*");
  res.send(median);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function getMedianNumbers(input) {
  // Takes an array of numbers and finds the middle point of the array, returning it.
  // If there are two middle values, both are returned.
  const arrayLength = input.length;
  const isEven = arrayLength % 2 === 0;
  if (isEven) {
    const secondChoice = arrayLength / 2;
    const firstChoice = secondChoice - 1;
    return [input[firstChoice], input[secondChoice]];
  } else {
    const median = Math.floor(arrayLength / 2);
    return input[median];
  }
}

function sieveOfEratosthenes(n) {
  // Eratosthenes algorithm to find all primes under n
  // Useful link: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
  // It is from StackOverflow with a little editing.
  const candidates = [];
  const upperLimit = Math.sqrt(n);
  const output = [];

  // Make an array from 2 to (n - 1)
  for (let i = 0; i < n; i++) {
    candidates.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= upperLimit; i++) {
    if (candidates[i]) {
      // Basically says, "If a divisible number 'i' is found, remove all numbers made from adding any amount of i"
      for (let j = i * i; j < n; j += i) {
        candidates[j] = false;
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
