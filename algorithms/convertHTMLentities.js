// Aug 4 2021

// This is an algorithm from
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities


// Instruction
/* Convert the characters &, <, >, " (double quote),
and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  const strArr = str.split("");
  // console.log(strArr);
  // ['S', 't', 'u', 'f', 'f', ' ', 'i', 'n', ' ', '"', 'q', 'u', 'o', 't', 'a', 't', 'i', 'o', 'n', ' ', 'm', 'a', 'r', 'k', 's', '"']

  for (let i = 0; i < strArr.length; i++) {
    switch (strArr[i]) {  // S, t, u, f, f.  .....
      case "<":
        strArr[i] = "&lt;";
        break;
      case ">":
        strArr[i] = "&gt;";
        break;
      case "&":
        strArr[i] = "&amp;";
        break;
      case '"':
        strArr[i] = "&quot;";
        break;
      case "'":
        strArr[i] = "&apos;";
        break;
    }
  }
  console.log(strArr.join("")); // Stuff in &quot;quotation marks&quot;
  console.log(strArr);
  // ['S', 't', 'u', 'f', 'f', ' ', 'i', 'n', ' ', '&quot;', 'q', 'u', 'o', 't', 'a', 't', 'i', 'o', 'n', ' ', 'm', 'a', 'r', 'k', 's', '&quot;']
  // *join() does not change the original array!
  // What join() returns: A String, representing the array values, separated by the specified separator(default is , comma).
  return strArr.join("");
}

console.log(convertHTML('Stuff in "quotation marks"')); // Stuff in &quot;quotation marks&quot;