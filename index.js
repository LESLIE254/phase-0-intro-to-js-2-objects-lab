// Write your solution in this file//
    const employee = {
        name: "Leslie",
        streetAddress: "Nairobi",
    
};
function updateEmployeeWithKeyAndValue(employee,key, value) {
    let newEmployee = {}
    newEmployee = { ...employee} ;
    newEmployee[key] = value;
    return newEmployee;


}
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {};
    newEmployee = { ...employee} ;
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
