import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {updateUser,previewUser} from '../../../actions/profileAction';
import _ from 'lodash';
import { Form, Input ,FormFeedback,Button} from "reactstrap";

import { MuiPickersUtilsProvider,DatePicker,KeyboardDatePicker } from "@material-ui/pickers";

import MomentUtils from '@date-io/moment';
import TextField from '@material-ui/core/TextField';
import './updateuser.scss'
const UpdateUserProfile=(props)=>{
    const [Address, setAddress] = useState('');
    const [Phone, setPhone] = useState('');
    // const [DOB, setDOB] = useState('');
    const [Status, setStatus] = useState('');
    const [DOB, setDOB] = useState(new Date());

    useEffect(() => {
      if (!_.isEmpty(props.profile.profile)) {
        setAddress(props.profile.profile.Address);
        setPhone(props.profile.profile.Phone);
        setStatus(props.profile.profile.Status);
        setDOB(props.profile.profile.DOB)
        
}
    }, [props.profile.profile]);
    useEffect(()=>{
        props.previewUser(props.match.params.id)
    },[props.previewUser])
  const   onSubmit=e=>{
        e.preventDefault();
        const newform=({
            Address,Phone,DOB,Status
        })
        
         props.updateUser(props.match.params.id,newform,props.history)
    }
    return (
        <div className='updateprofile'>
        <Form onSubmit={onSubmit}>
        <div className='updateprofile__title'>
          Update Profile
        </div>
        <div className='row'>
        <div className='col-sm-4'>
             <div className='updateprofile__name'>
            Address
             </div>
           </div>
           <div className='col-sm-8'>
           <div className='updateprofile__input'>
           <Input
              type="text"
              name="Address"
              id="Address"
              value={Address ||''}
              onChange={e => setAddress(e.target.value)}
              
            />
           </div>
           
            
           </div>
         
         <br/>
        </div>
        
        <div className='row'>
        <div className='col-sm-4'>
             <div className='updateprofile__name'>
             Phone
             </div>
           </div>
           <div className='col-sm-8'>
           <div className='updateprofile__input'>
           <Input
              type="text"
              name="Phone"
              id="Phone"
              value={Phone ||''}
              onChange={e => setPhone(e.target.value)}
            
            />
           </div>

            
           </div>
         
         <br/>
        </div>

           <div className='row'>
        <div className='col-sm-4'>
        <div className='updateprofile__name'>
             DOB
             </div>
           </div>
           <div className='col-sm-8'>
           <div className='updateprofile__date'>
           <MuiPickersUtilsProvider utils={MomentUtils}>
           {/* <TextField
        id="date"
        
        type="date"
        defaultValue={DOB}
        
        onChange={date => setDOB(date)}
      // /> */}
              <DatePicker
                keyboard='true'
                name="DOB"
                format="DD/MM/YYYY"
                value={DOB ||''}
                onChange={date => setDOB(date)}

              />
            </MuiPickersUtilsProvider>
 
           </div>
           
            
           </div>
         
         <br/>
        </div>
        <div className='row'>
        <div className='col-sm-4'>
             <div className='updateprofile__name'>
             Status
             </div>
           </div>
           <div className='col-sm-8'>
           <div className='updateprofile__input'>
           <Input
              type="text"
              name="Status"
              id="Status"
              value={Status || ''}
              onChange={e => setStatus(e.target.value)}
            
            />
           </div>
           
            
           </div>
         
         <br/>
        </div>
        <div className="updateprofile__button">
          <Button color='success'>Save</Button>
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