// Aug 4 2021

// This is an algorithm from
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities


// Instruction
/* Convert the characters &, <, >, " (double quote),
and ' (apostrophe), in a string to their corresponding HTML entities.
 */


// solution 1
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

// console.log(convertHTML('Stuff in "quotation marks"')); // Stuff in &quot;quotation marks&quot;

// solution 2

const convertHTML2 = (str) => {
  const entityPairs = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  console.log(str.replace(/[&<>"']/g, (match) => entityPairs[match]));
  return str.replace(/[&<>"']/g, (match) => entityPairs[match]);
}

// g option... global 置き換えたい文字列が複数ある場合に、その全てを置き換える
// i option... ignore case 大文字、小文字を区別しない
// []... 文字集合を表す、角かっこで囲まれた文字のいずれか１個にマッチする。全ての文字が入っている必要はない。
// replace()... a string or a function you want to replace(which returns a string you want to replace) can be set in the second parameter

console.log(convertHTML2('Stuff in "quotation marks"')); // Stuff in &quot;quotation marks&quot;