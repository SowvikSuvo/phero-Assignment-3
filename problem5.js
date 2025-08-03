/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhanku", roll: 1014, department: "cse" };
//write your code here

var PhEmail =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(PhEmail);
