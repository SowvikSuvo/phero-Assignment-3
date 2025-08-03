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
