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

// Expanding Functionality -Part 2- This Works, like I said above I'm slightly confused as this blurs into Part 1 

let csv_Str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

// console.log (csv_Str);


const tableHeadArray = [];  //big array catcher

const newTableRow = csv_Str.split('\n'); //  Helps splits the CSV string into rows.
const header = newTableRow[0].split(',');

tableHeadArray.push(header);  //moves all header elements into the header

newTableRow.slice(1).forEach(row => {
    const cells = row.split(',');
    //console.log(cells.join(', '));    // should help with the cells 
    tableHeadArray.push(cells);
});

// console.log(tableHeadArray);

console.log('===================================================================================================================================')

// Transforming Data  Part 3 - This works 

// let csv_Str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

// const newObjectArray =[]; // This stores new object array 

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

 //Sorting and Manipulating Data Part 4.1- I'm not sure if to put the entire program from part 3 and adjust it of just the adjustments here???

// push() Method: Adds one or more elements to the end of an array and returns the new length of the array.
//pop() Method: Removes the last element from an array and returns that element.
// There's also shift and unshift, we'll see how far into the methods I choose.

// let csv_Str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

const newObjectArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }
];

newObjectArray.pop(); // To remove Bill and replace with Bilbo

newObjectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" }); // putting Barry under Bruce in the row index

newObjectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }); //To add Bilbo to the array at the end

// console.log(newObjectArray);

//This is the result console.log(newObjectArray)

[
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
  ]
  
// Sorting and Manipulating Data Part 4.2
// Get total Age...
// then get Average Age...

let totalAge = 0;                                           // This for loop adds all ages together
for (const i = 0; i < newObjectArray.length; i++){
    totalAge += +(newObjectArray[i].age);                  

 }
 let avgAge = totalAge / newObjectArray.length; // You can get the averages, by dividing. 

 console.log(avgAge)


 console.log('===================================================================================================================================')

 //Full Circle Part 5 -Fnally !!!! 

 const newObjectArray = [
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
  ];

 const newCSV = (array) => {                            //Tried a quasi function let's see how this goes
    const header = Object.keys(array[0]).join(',');
    const rows = array.map(obj => Object.values(obj).join(','));
    return [header, ...rows].join('\n'); 
 }
 const csvGarbData = newCSV(newObjectArray);            // Why would we go back?, basically converts everything back to how it was.
 console.log(csvGarbData);