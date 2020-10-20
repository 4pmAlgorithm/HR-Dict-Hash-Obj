// Given two strings, determine if they share a common substring. A substring may be as small as one character.

// For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.

// Function Description

// Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.

// twoStrings has the following parameter(s):

// s1, s2: two strings to analyze .
// Input Format

// The first line contains a single integer , the number of test cases.

// The following  pairs of lines are as follows:

// The first line contains string .
// The second line contains string .
// Constraints

//  and  consist of characters in the range ascii[a-z].
// Output Format

// For each pair of strings, return YES or NO.


// function twoString(s1, s2){
//     let s1_set = {}
//     for(let i =0; i < s1.length; i++){
//         s1_set[s1[i]] = 1; //initiate key, val
//     }
//     for(let i = 0; i < s2.length; i++){
//         if(s2[i] in s1_set){
//             return "YES"
//         }
//     }
//     return "NO"
// }

function twoString(s1, s2){
    let s1_set = {}

    for(let i = 0; i < s1.length; i++){
        s1_set[s1[i]] = 1;
    }
    for(let i = 0; i < s2.length;i++){
        if(s2[i] in s1_set){
            return "YES"
        }

    }
    return "NO"
}


console.log(twoString("hello", "world"))