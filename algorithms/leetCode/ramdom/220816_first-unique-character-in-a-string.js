// August 16 2022
// First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        } 
    }
    return -1;
};

// someone's good solutions
var firstUniqChar2 = function(s) {
    for(let i=0;i<s.length;i++){
        let ch=s[i]
        if(s.indexOf(ch)==i && s.indexOf(ch,i+1)==-1){
        return i
        }
    }
    return -1
};

var firstUniqChar3 = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i],2);
        } else {
            map.set(s[i],1);
        }
        console.log(map);
    }

    for(let j = 0; j < s.length; j++ ){
        if (map.has(s[j]) && map.get(s[j])===1){
            return j;
        }
    }
    return -1;
} ;

console.log(firstUniqChar3("aabbccddeffgg"));
