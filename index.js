const employee = {
  name: 'Bob',
  streetAddress: '123 Brick Road'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };

  newEmployee[key] = value;

  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee2 = { ...employee };
  delete newEmployee2[key];
  return newEmployee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}