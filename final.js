/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var divideAsset = area / 2;

console.log(divideAsset);

//*-------------------------------------------------------*//

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

//*-------------------------------------------------------*//

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(day, "-", "medicine");
  } else {
    console.log(day, "-", "rest");
  }
}

//*-------------------------------------------------------*//

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if (fileName[0] === "#") {
  console.log("Store");
} else if (fileName.slice(-4) === ".pdf") {
  console.log("Store");
} else if (fileName.slice(-5) === ".docx") {
  console.log("Store");
} else {
  console.log("Delete");
}

//*-------------------------------------------------------*//

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhanku", roll: 1014, department: "cse" };
//write your code here

var PhEmail =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(PhEmail);

//*-------------------------------------------------------*//

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var CurrentSalary = startingSalary;

for (var year = 1; year <= experience; year++) {
  // 5% Salary increase
  var IncreaseSalary = CurrentSalary * 0.05;
  CurrentSalary = CurrentSalary + IncreaseSalary;
}
CurrentSalary = CurrentSalary.toFixed(2);
console.log(CurrentSalary);
