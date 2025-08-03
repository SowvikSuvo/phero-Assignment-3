/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

for (var year = 1; year <= experience; year++) {
  // 5% Salary increase
  var IncreaseSalary = startingSalary * 0.05;
  startingSalary = startingSalary + IncreaseSalary;
}
startingSalary = startingSalary.toFixed(2);

console.log(startingSalary);
