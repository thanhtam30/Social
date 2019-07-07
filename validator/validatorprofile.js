const validator = require("validator");
const _=require('lodash');
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


module.exports=validatorprofile;
