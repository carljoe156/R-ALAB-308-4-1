//Part 1 refactoring code- Code from Group lab
//old code

// const CSV_STR = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

// //======== Part 1: Refactoring Old Code ========
// let word = '';
// let row = [];

// for (let i = 0; i < CSV_STR.length; i++) {
//     let ch = CSV_STR[i];

//     if (ch != "," && ch != "\n") {
//         word += ch; // add character to word
//     }
//     else {
//         row.push(word); // add to row
//         word = ''; // clear word

//         if (ch == "\n") {
//             // print out the row
//             console.log(row.join(', '));
//             // clear row
//             row = [];
//         }
//     } 
// }

console.log('==================================================================================================================================')

//new code -refactoring old code -Part 1- This Works, I'm slightly confused if this contributes to Part 2 as it functions in one big Array and Part 2 calls for more 'nested' arrays

const csv_Str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

//console.log (csv_Str); - may not need this 

 const newTableRow = csv_Str.split('\n'); //  Helps splits the CSV string into rows.
console.log(newTableRow);



//  //old trying a thing might use later
// const newTableRow = csv_Str.split('\n'); //  Helps splits the CSV string into rows.
// //let something = 0 ;
// newTableRow.forEach(row => {
//     const cells = row.split(','); //  Helps split each row into cells
//      //console.log(cells.join(', ')); // Print the cells
  
// });

console.log('===================================================================================================================================')

// Expanding Functionality -Part 2

// let csv_Str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

// console.log (csv_Str);

//const
// const tableArray = [];
// const newTableRow = csv_Str.split('\n'); //  Helps splits the CSV string into rows.
// let newCell = 0 ;

// newTableRow.forEach(row => {
//     const cells = row.split(','); // Helps split each row into cells
//     console.log(cells.join(', ')); // should help with the cells 
// });


console.log('===================================================================================================================================')

