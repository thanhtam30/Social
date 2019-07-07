const validator = require("validator");
const _=require('lodash');
const validatorpost = (data) => {
    let errors = {}
    let {Title, Detail} = data;
   
    if(!Detail) Detail = "";
  
   

  if(validator.isEmpty(Detail)){
      errors.Detail='Detail is required'
  }
    // validator DOB
  
    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}
const validatorpostcomment = (data) => {
    let errors = {}
    let {Comment} = data;
    if(!Comment) Comment = "";
    if(validator.isEmpty(Comment)){
        errors.Comment = "Comment is required"
    }
    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}

module.exports={validatorpost,validatorpostcomment};
