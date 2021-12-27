const employee = {
  employeeName: "Sam",
  employeeAddress: "123 Joe Lane",
};



function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
};
const newEmployee = updateEmployeeWithKeyAndValue(
  employee,
  "employeeName",
  "Roger");
newEmployee;




function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
};
const newEmployeeDestructive = destructivelyUpdateEmployeeWithKeyAndValue(
  employee, 
  "employeeName", 
  "Roger");
newEmployeeDestructive;




function deleteFromEmployeeByKey(object, key){
  var newObj =  Object.assign({},object);
  delete newObj[key];
  return newObj;
}; 
const newDelete = deleteFromEmployeeByKey(
  employee,
  "employeeAddress");
employee;




function destructivelyDeleteFromEmployeeByKey(object, key){
  delete object[key];
  return object;
};
destructivelyDeleteFromEmployeeByKey(employee, "employeeAddress");
employee;