import axios from "axios";

export default function requestMedianOfPrimes(maxVal) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  const promise = axios.get(`http://localhost:8080/${maxVal}`, headers);
  // .then((res) => {
  //   const median = res.data;
  //   console.log(median, 5);
  // });

  const extractedData = promise.then((response) => response.data);

  return extractedData;
}
