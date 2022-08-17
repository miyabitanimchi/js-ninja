// August 17 2022
// Unique Morse Code Words
// https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function(words) {
    if (words.length === 1) return 1;
    
//     97
//     122
    const morseCodeList = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    // const dic = morseCodeList.map((code, i) => {
    //     return { [String.fromCharCode(97 + i)]: code };
    // });
    
    const dic = {};
    morseCodeList.forEach((code, i) => {
        dic[String.fromCharCode(97 + i)] = code;
    })
    
    const wordsToMorseCode = [];
    for (let i = 0; i < words.length; i++) {
        let morseCode = "";
        for (let j = 0; j < words[i].length; j++) {
            morseCode += dic[words[i][j]];
        }
        wordsToMorseCode.push(morseCode);
    }

    return [...new Set(wordsToMorseCode)].length;
};