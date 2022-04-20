function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const valuesSalary = Object.values(salaries);
  for(const value of valuesSalary) {
    totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}
