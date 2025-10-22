// let contacts = []; // to store name and phone number objects
// let i = 0;         // starting value

// while (i < 3) { // repeat 3 times
//   let name = prompt("Enter name:");
//   let phone = prompt("Enter phone number:");

//   // create an object for each contact
//   let contact = {
//     name: name,
//     phone: phone
//   };

//   // add object to the array
//   contacts.push(contact);

//   i++; // move to next
// }

// // show all contacts
// console.log("Your contacts:");
// console.log(contacts);



let contacts=[];
let id=1;




while(true)

{

  let input=prompt("Enter input values \n [1] Add \n [2] Display \n [3] delete \n [5]Exit")
   
    if(input==="1")
    {
      let name=prompt("Enter name here...")  
      let phone=prompt("Enter phone number here...")
      contacts.push({id:id++ ,name:name ,phone:phone})
      
    }

}