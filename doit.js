/**
 * code assignment

In the programming language of your choice,

Write a program that parses a sentence
and replaces each word with the following:
1.
  a. First letter,
  b. number of distinct characters between first and last character
  c. , and last letter.

For example, Smooth would become S3h.

2. Words are separated by spaces or non-alphabetic characters
and these separators should be maintained in their original form and location in the answer.

A few of the things we will be looking at is accuracy, efficiency, solution completeness.

Please include this problem description in the comment at the top of your solution.
The problem is designed to take approximately 1-2 hours and
will be used as a conversation point in the verbal assessment part of the on-site interview.
Please complete the coding assessment and have your solution uploaded as soon as possible.
Please upload your solution to Dropbox or similar option (not G-Drive) and
send a link to download the folder.
 */
//
let ist = `This 'is'   only a "test" okay?@ #   $$%`
// `T2s 'i0s'   o2y a "t2t" o2y?@ #   $$%`
// ist =`Smooth`

let output = ""; // Build the output as we go
let previous_letter = ""; // Last step of algorythm
let current_letter = "";
let next_letter = "";
let letters = /^[A-Za-z]+$/;
let distinct = new Set;

for (var i = 0; i < ist.length; i++) {
    // 1. Current letter
    current_letter = ist[i];
    // 2. Set the next letter//
    if (i < ist.length-1) {
        next_letter = ist[i + 1]
    } else {
        next_letter = "";
    }
    // 3. Get input and check if it is a letter
    let result = current_letter.match(letters)
    if (result === null) {
        // 4. Current input not a letter
        output = output + current_letter;
    } else {
        // 5.  Current input is a letter
        result = previous_letter.match(letters)
        if (result === null) {
            // 6. Previous input is not a letter
            output = output + current_letter;
        } else {
            // 7. Previous input is a letter
            if (next_letter != "") {
                // 8. Next input is a Letter or Special or Space
                result = next_letter.match(letters)
                if (result != null) {
                    // 9. Next input is a Letter
                    distinct.add(current_letter);
                    continue;
                } else {
                    // 10. Next input is a Special or Space
                }
            } else {
                // 11. There are no more Characters to Parse
                nop
            }
            // 12. Common steps follow
            let size = distinct.size.toString();
            output = output + size + current_letter;
            distinct.clear();
        }
    }
    // Set the previous letter
    previous_letter = ist[i];
}
console.log("Input: `"+ist + "`");
console.log("Output: `" + output + "`")

