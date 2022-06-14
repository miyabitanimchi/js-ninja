// June 14 2022
// https://leetcode.com/problems/delete-operation-for-two-strings/
// Delete Operation for Two Strings
// Solution from the link below, thank you so much
// https://leetcode.com/problems/delete-operation-for-two-strings/discuss/762505/Javascript-DP-Easiest-Solution
// Resources:
// Japanese - https://www.momoyama-usagi.com/entry/info-algo-dp
// English - https://www.programiz.com/dsa/dynamic-programming

var minDistance = function(word1, word2) {
    let word1Arr = word1.split(''); // ['s', 'e', 'a'];
    let word2Arr = word2.split(''); // ['e', 'a', 't'];
    let dp = new Array(word1Arr.length+1); // [empty × 4]
    console.log(dp);
    for (var i = 0; i < word1Arr.length+1; i++) {
        dp[i] = new Array(word2Arr.length+1).fill(0);
    } // db... [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
    for(var i=0; i<=word1Arr.length; i++){
        for(var j=0; j<=word2Arr.length; j++){
            if(i === 0){
                dp[i][j] = j;
            }else if(j === 0){
                dp[i][j] = i;
            }else if(word1Arr[i-1] === word2Arr[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1]);
            }
        }   
    }
    return dp[word1Arr.length][word2Arr.length];
};

// to do... understand what's going on