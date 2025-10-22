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

    else if(input==="2"){

      str=``
        for(let [index,todo] of contacts.entries())
        {
          str+=`[${index+1}]  \n ${todo.name} \n ${todo.phone} \n`
        }
        alert(str)
    }

    else if(input==="3")
    {
       str=``
        for(let todo of contacts)
        {
          str+=`[${todo.id}] \n ${todo.name} \n ${todo.phone}`
        }
        let del=prompt( `${str} \n Enter id delete the content...`)
        contacts.splice(del -1,1)
    }


      else if(input=="5"){
        break
    }
    else("Invalid entry try again")

 
    
}