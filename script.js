function stringChop(str, size) {

	  // Validate inputs
  if (!str || size <= 0) {
    return [];
  }

  // Initialize result array
  const result = [];

  // Loop through the string in increments of size
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  // Return the resulting array
  return result;
	
  
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
