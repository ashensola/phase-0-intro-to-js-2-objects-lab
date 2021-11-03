// Write your solution in this file!
let employee={
    name:'Ash',
    streetAddress:'Sydney'
};


let key, value;


function updateEmployeeWithKeyAndValue(employee, key, value) {
    let obj2 = Object.assign({}, employee);
    obj2[key]=value;
    console.log(obj2);

    return obj2;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

      employee.streetAddress=value;

     return employee;

 }

// destructivelyUpdateEmployeeWithKeyAndValue(employee, "steetAddress", 'kandy');
// console.log(employee);


function deleteFromEmployeeByKey(employee, key){
let obj3=Object.assign({}, employee);
delete obj3[key];
//console.log(obj3);
 
return obj3;

 }

 //deleteFromEmployeeByKey(employee, "streetAddress");


 function destructivelyDeleteFromEmployeeByKey(employee, key){

     delete employee[key];
     return employee;
 }

 //destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");

