import React, { useState ,useEffect} from 'react';
import {connect} from 'react-redux';
import './signin.scss';
import { Button, Input, FormFeedback,Form,Label } from 'reactstrap';
import {signin} from '../../../actions/userActions';

const SignIN=(props)=>{
const [fullName,setfullName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [Hidden,setHidden]=useState(true);
const [errors,seterrors]=useState({});
const onSubmit=(e)=>{
    e.preventDefault();
    const NewSignIn={
        fullName,email,password
    }
   props.signin(NewSignIn,props.history)
}
const Toggole=()=>{
  setHidden(!Hidden)
}
// useEffect(()=>{
//   if(props.password){
//     setPassword({password:props.password})
//   }
  
// },[props.password])
useEffect(
    () => {
        seterrors(props.errors)
    },
    [errors, props.errors]
  )
return (
    <div className="row">
    <div className="formsignin">
      <Form onSubmit={onSubmit}>
        <div className="row">
          <div className="formsignin__header">SIGNIN</div>
        </div>
        <div className="row">
          <div className="formsignin__fullName">
            <div className="col-sm-4">
              <div className="formsignin__fullName--lable">Full Name:</div>
            </div>
            <div className="col-sm-8">
              <div className="formsignin__fullName--input">
              <Input
                    
                                                type="text"
                                                name="fullName"
                                                id="fullName"
                                                placeholder="Enter fullName..."
                                                onChange={e => setfullName(e.target.value)}
                                                invalid={errors.fullName  ? true : false}
                                            />
                                            
                                            <FormFeedback>{errors.fullName  ? errors.fullName  : null}</FormFeedback>         
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="formsignin__email">
            <div className="col-sm-4">
              <div className="formsignin__email--lable">Email:</div>
            </div>
            <div className="col-sm-8">
              <div className="formsignin__email--input">
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email..."
                  onChange={e => setEmail(e.target.value)}
                  invalid={errors.email || errors.noemail ? true : false}
                />
                <FormFeedback>
                  {errors.email || errors.noemail
                    ? errors.email || errors.noemail
                    : null}
                </FormFeedback>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="formsignin__password">
            <div className="col-sm-4">
              <div className="formsignin__password--lable">PassWord:</div>
              

            </div>
            <div className="col-sm-8">
              <div className="formsignin__password--input">
              <Input
          type={Hidden ? "password" : "text"}
          placeholder='Password'
          value={password}
          onChange={e=>setPassword(e.target.value)}
          invalid={errors.password ||errors.nopassword ?true:false}
        />
        
          
                <FormFeedback>
                  {errors.password || errors.nopassword
                    ? errors.password || errors.nopassword
                    : null}
                </FormFeedback>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
        <div className="formsignin__checkbox">
        <Label>
            <Input type='checkbox' onClick={Toggole}/>{Hidden?'Hide Password':'Show Password'}
          </Label>
        </div>
        </div>
        <div className="formsignin__button">
          <Button className="btn btn-info">SignIn</Button>
        </div>
      </Form>
    </div>
    
  </div>

       
    
)
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        errors:state.errors
    }
}
export default connect(mapStateToProps,{signin})(SignIN);