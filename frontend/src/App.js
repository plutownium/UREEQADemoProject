import React, { useState } from "react";

import "./App.css";

import requestMedianOfPrimes from "./util/request";
import displayMedian from "./util/displayMedian";

function App() {
  const [requestedMax, setRequestedMax] = useState(null);
  const [median, setMedian] = useState(null);

  return (
    <div className="App">
      <div>
        <h1 id="headerStyling">For Ureeqa</h1>
        <div id="inputsMainContainer">
          <div id="inputsResizing">
            <input
              type="number"
              min="1"
              max="300000"
              onChange={(event) => {
                setRequestedMax(event.target.value);
              }}
            />
            <button
              onClick={() => {
                // get value from input if it's been assigned
                if (requestedMax !== null) {
                  // send request to server
                  requestMedianOfPrimes(requestedMax).then((data) => {
                    console.log(data, typeof data, 30);
                    setMedian(data);
                  });
                } else {
                  // could display an error like "pick your max!"
                }
              }}
            >
              Get Median
            </button>
          </div>
        </div>
        {/* // max=300,000, let's keep it reasonable! */}
        <div>
          <h2> {displayMedian(median)}</h2>
        </div>
        {/* <button
          onClick={() => {
            console.log(median, 46);
          }}
        >
          Inspect
        </button> */}
      </div>
    </div>
  );
}

export default App;
