import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {updateUser,previewUser} from '../../actions/profileAction';
import _ from 'lodash';
import { Form, Input ,FormFeedback,Button} from "reactstrap";

const UpdateUserProfile=(props)=>{
    const [Address, setAddress] = useState('');
    const [Phone, setPhone] = useState('');
    const [DOB, setDOB] = useState('');
    const [Status, setStatus] = useState('');
    const [errors, seterrors] = useState('');
    useEffect(() => {
        if (!_.isEmpty(props.profile.profile)) {
          setAddress(props.profile.profile.Address);
          setPhone(props.profile.profile.Phone);
          setDOB(props.profile.profile.DOB);
          setStatus(props.profile.profile.Status);
        }  
      }, [props.profile.profile]);
      
    useEffect(()=>{
        props.previewUser(props.match.params.id)
    },[])
  const   onSubmit=e=>{
        e.preventDefault();
        const newform=({
            Address,Phone,DOB,Status
        })
        console.log(newform)
        // props.updateUser(props.match.params.id,newform,props.history)
    }
    return (
        <div className='updateprofile'>
        <Form onSubmit={onSubmit}>
        <div className='row'>
        <div className='col-sm-4'>
             <div className='Address'>
             <h4>Address</h4>
             </div>
           </div>
           <div className='col-sm-8'>
           <Input
              type="text"
              name="Address"
              id="Address"
              value={Address}
              onChange={e => setAddress(e.target.value)}
              invalid={errors.Address ? true : false}
            />
            <FormFeedback>{errors.Address ? errors.Address : null}</FormFeedback>
           </div>
         
         <br/>
        </div>
        
        <div className='row'>
        <div className='col-sm-4'>
             <div className='Phone'>
             <h4>Phone</h4>
             </div>
           </div>
           <div className='col-sm-8'>
           <Input
              type="text"
              name="Phone"
              id="Phone"
              value={Phone}
              onChange={e => setPhone(e.target.value)}
              invalid={errors.Phone ? true : false}
            />
            <FormFeedback>{errors.Phone ? errors.Phone : null}</FormFeedback>
           </div>
         
         <br/>
        </div>

           <div className='row'>
        <div className='col-sm-4'>
             <div className='DOB'>
             <h4>DOB</h4>
             </div>
           </div>
           <div className='col-sm-8'>
           <Input
              type="date"
              name="DOB"
              id="DOB"
              value={DOB}
              onChange={e => setDOB(e.target.value)}
              invalid={errors.DOB ? true : false}
            />
            <FormFeedback>{errors.DOB ? errors.DOB : null}</FormFeedback>
           </div>
         
         <br/>
        </div>
        <div className='row'>
        <div className='col-sm-4'>
             <div className='Status'>
             <h4>Status</h4>
             </div>
           </div>
           <div className='col-sm-8'>
           <Input
              type="text"
              name="Status"
              id="Status"
              value={Status}
              onChange={e => setStatus(e.target.value)}
              invalid={errors.Status ? true : false}
            />
            <FormFeedback>{errors.Status ? errors.Status : null}</FormFeedback>
           </div>
         
         <br/>
        </div>
        <div className="button-post">
          <Button color="primary"
       
           >Save</Button>{' '}
             <Button color="primary"
       
           >Cancel</Button>{' '}
          </div>
                   
        </Form>
           
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        errors:state.errors
    }
}
export default connect(mapStateToProps,{updateUser,previewUser})(UpdateUserProfile);