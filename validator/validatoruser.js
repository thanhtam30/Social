const validator = require("validator");
const _=require('lodash');
const validatorsignin = (data) => {
    let errors = {}
    let {email, password,  fullName} = data;
    if(!email) email = "";
    if(!password) password = "";
    if(!fullName) fullName = "";
    // validator email
    if(!validator.isEmail(email)){
        errors.email = "Email is invalid"
    }
    if(validator.isEmpty(email)){
        errors.email = "Email is required"
    }
   //validator password
  if(validator.isEmpty(password)){
      errors.password='Password is required'
  }
    // validator fullName
    if(validator.isEmpty(fullName)){
        errors.fullName = "Full name is required"
    }
    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}

const  validatorLogin=(data)=>{
    let errors = {};
    let {email, password} = data;
    if(!email) email = "";
    if(!password) password = "";
    // validator email
    if(!validator.isEmail(email)){
        errors.email = "Email is invalid"
    }
    if(validator.isEmpty(email)){
        errors.email = "Email is required"
    }
    // validator password
    if(validator.isEmpty(password)){
        errors.password = "Password is required"
    }
    return {
        errors,
        isValid: _.isEmpty(errors)
    }  
};
const validatorprofile = (data) => {
    let errors = {}
    let {Address, Phone,  Status,DOB} = data;
    if(!Address) Address = "";
    if(!Phone) Phone = "";
    if(!DOB) DOB = "";
    if(!Status) Status = "";
    // validator Address
   
    if(validator.isEmpty(Address)){
        errors.Address = "Address is required"
    }
    // validator Address
   
    if(validator.isEmpty(Status)){
        errors.Status = "Status is required"
    }
   //validator Phone
  if(validator.isEmpty(Phone)){
      errors.Phone='Phone is required'
  }
    // validator DOB
    if(validator.isEmpty(DOB)){
        errors.DOB = "DOB is required"
    }
    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}
module.exports={validatorLogin,validatorsignin,validatorprofile};
