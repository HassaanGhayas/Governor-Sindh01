// Q2 Printing a simple name
// let a : string = "Asharib,";
// console.log("Hello", a ,"would you like to learn some typescript");
//Q3 Printing name in different cases
// let b: string = "asharib"
// let uppercase = b
// console.log(uppercase.toUpperCase())
// let lowercase = b
// console.log(lowercase.toLowerCase())
// let titlecase = b
// console.log(titlecase.replace("a", "A"));
//Q4 quote
// console.log("Albert Einstein once said, 'A person who never made a mistake never tried anything new.'");
//Q5 quote concatination
// let mquote: string = "Albert Einstein once said,"
// let msgs : string = mquote + " 'A person who never made a mistake never tried anything new.'"
// console.log(msgs);
//Q6 New line and New Tab
// let wspace: string = "\t\n Hello \t\n"
// console.log(wspace);
// let woutspace: string = "Hello"
// console.log(woutspace);
//Q7 Arithematic Operators
// console.log(2*4);
// console.log(16/2);
// console.log(10-2);
// console.log(6+2);
//Q8 Printing 8
// console.log(64/8);
// console.log(2**3);
// console.log(12-4);
// console.log(10+2-4);
//Q9 My facourite number concatination
// let magna: string = 2 + " is my favorite number"
// console.log(magna);
//Q10 Adding Comments
// Done
//Q11 Printing in a list
// let nameoffriends : string[] = ["jack", "jill", "Phil"]
// for (let i = 0; i < nameoffriends.length; i++) {
//     console.log(nameoffriends[i]); 
// }
//Q12 Printing a message
// let Friends: string[] = ["Jones", "Daniel", "James"]
// console.log(Friends[0], "Goodbye");
// console.log(Friends[1], "Goodbye");
// console.log(Friends[2], "Goodbye");
//Q13 Dream Vehicles
// let Vehicles: string[] = ["Kawasaki Motorcycle", "Honda Civic"]
// Vehicles.forEach(Vehicles =>{
// console.log("I would buy a", Vehicles);})
// Q14 invitation at a dinner and replacing of words
// let invitation: string[] = ["Cousin1.", "Cousin2.", "Cousin3."]
// invitation.forEach(invitation => {
//     console.log("Hey", invitation.replace(".", ","),"you are invited at XYZ Lawn by ABC"); 
// })
// Q15 some guests cant attend
// let invitation: string[] = ["Cousin1", "Cousin2", "Cousin3"]
// let Cantattend: string[] = ["Cousin2"]
// console.log(invitation[1], "can't attend");
// invitation.splice(1, 1, "Cousin")
// invitation.forEach(invitation => {
//  console.log("Hey", invitation.replace(".", ","),"you are invited at XYZ Lawn by ABC"); 
//     })
//Q16 More Guests
// let invitation: string[] = ["Cousin1", "Cousin2", "Cousin3"]
// console.log(`We have successfully found a bigger table`);
// console.log(`\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ Additional Guest are Cousin4 & Cousin5 \n`);
// invitation.push("Cousin4", "Cousin5");
// for (let i = 0; i < invitation.length; i++) {
//     console.log(`Hey ${invitation[i]} you are invited at XYZ Lawn by ABC`);
// }
//Q17 Shrinking Guest List
// let invitation: string[] = ["Cousin1", "Cousin2", "Cousin3"]
// console.log("Unfortunately the table won't arrive on time \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t");
// invitation.splice(2,1,)
// for (let i = 0; i < invitation.length; i++) {
//     console.log(`Hey ${invitation[i]} you are invited at XYZ Lawn by ABC`);
// }
//Q18 Dream Places
// let visitnglist: string[] = ["Saudia Arabia", "Switzerland", "Kashmir"]
// let gram = 0
// for (let gram = 0; gram < visitnglist.length; gram++) {
//     console.log(`I would like to visit ${visitnglist[gram]}`);
// }
// //Reverse Order
// for (let gram = 0; gram < visitnglist.length; gram++) {
//         console.log(`I would like to visit ${visitnglist.reverse()[gram]}`);
//     }
//Q19 No of people invited
// let invitation: string[] = ["Cousin1", "Cousin2", "Cousin3"]
// console.log(`No of people getting invited are ${invitation.length}`);
//Q20 List of Rivers
// let Rivers: string[] = ["River Indus", "River Neil", "River Chenab", "River flow"]
// console.log(`List of Rivers`);
// for (let rive = 0; rive < Rivers.length; rive++) {
//     console.log(`${Rivers[rive]}`);
// }
//Q21 Storing different types of data in object
// let politicianname : {Name: string, Birthdate: number, Deathdate: boolean} = {
//     Name: "Narendra Modi",
//     Birthdate: 1947,
//     Deathdate: false}
// console.log(`${politicianname.Name} was born on ${politicianname.Birthdate} & died on ${politicianname.Deathdate}`);
export {};
