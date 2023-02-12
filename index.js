const employee = {
    name: {},
    streetAddress: {},

};

function updateEmployeeWithKeyAndValue(employee, key, value){
const updatedEmployee = {...employee};
updatedEmployee[key] = value;
return updatedEmployee;
};


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;

};

function deleteFromEmployeeByKey(employee, key){
    const cloneEmployee = {...employee};
    delete cloneEmployee[key];
    return cloneEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
};
