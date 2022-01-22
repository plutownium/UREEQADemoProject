export default function displayMedian(variedInput) {
  console.log(variedInput);
  if (variedInput === null) {
    return "Choose your input!";
  } else if (variedInput.length === 2) {
    return variedInput.join(", ");
  } else {
    console.log(variedInput);
    return variedInput.toString();
  }
  //   else {
  //     console.log(variedInput, variedInput.length);
  //     throw Error("you shouldn't be able to get here you know");
  //   }
}
