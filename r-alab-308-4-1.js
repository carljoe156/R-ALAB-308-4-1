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

// const csv_Str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

// //console.log (csv_Str); - may not need this 

//  const newTableRow = csv_Str.split('\n'); //  Helps splits the CSV string into rows.
// console.log(newTableRow);



//  //old trying a thing might use later
// const newTableRow = csv_Str.split('\n'); //  Helps splits the CSV string into rows.
// //let something = 0 ;
// newTableRow.forEach(row => {
//     const cells = row.split(','); //  Helps split each row into cells
//      //console.log(cells.join(', ')); // Print the cells
  
// });

console.log('===================================================================================================================================')

// Expanding Functionality -Part 2- This Works, like I said above I'm slightly confused as this blurs into Part 1 

// let csv_Str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

// console.log (csv_Str);


// const tableHeadArray = [];  //big array catcher

// const newTableRow = csv_Str.split('\n'); //  Helps splits the CSV string into rows.
// const header = newTableRow[0].split(',');

// tableHeadArray.push(header);  //moves all header elements into the header

// newTableRow.slice(1).forEach(row => {
//     const cells = row.split(',');
//     //console.log(cells.join(', '));    // should help with the cells 
//     tableHeadArray.push(cells);
// });

// console.log(tableHeadArray);

console.log('===================================================================================================================================')

// Transforming Data  Part 3 - This works 

let csv_Str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

const newObjectArray =[]; // This stores new object array 

const newTableRow = csv_Str.split('\n');
const header = newTableRow[0].split(',').map(h => h.trim().toLowerCase());
//const headings = header[0];                  probably wouldn't need this 

// for(let h = 0; h < header.length; h++) {
//     header[h] = header[h].trim().toLocaleLowerCase();
// }

for (let i = 1; i < newTableRow.length; i++) {    // deals with the header and row situation, should start from 1 instead of 0
    const row = newTableRow[i].split (',');
    const obj = {};                               // to hold the rows
 
for (let j = 0; j < header.length; j++) {
    if (row[j]) {
        obj[header[j]] = row[j].trim();             // to trim the header
    }
}    
    
    newObjectArray.push(obj);            // adds objects to the new array
}
 console.log(newObjectArray)


 console.log('===================================================================================================================================')

 //Sorting and Manipulating Data Part 4

