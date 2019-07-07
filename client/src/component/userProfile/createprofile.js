// import React, { useState,useEffect } from 'react'
// import {connect} from 'react-redux';
// import {createProfile} from '../../actions/profileAction';
// import { Button, Form,  Input, FormFeedback } from 'reactstrap';
// import './createprofile.css';
// const CreateProfile=(props)=>{
//     const [Address,setAddress]=useState('');
//     const [Phone,setPhone]=useState('');
//     const [DOB,setDOB]=useState('');
//     const [Status,setStatus]=useState('');
//     const [errors,seterrors]=useState({});
//     const onSubmit=e=>{
//         e.preventDefault();
//         const newProfile={
//                Address:Address,
//                Phone:Phone,
//                DOB:DOB,
//                Status:Status
//         }
//         props.createProfile(newProfile,props.history)
//     }
//     useEffect(
//         () => {
//             seterrors(props.errors)
//         },
//         [errors, props.errors]
//       )
//     return(
   
      
//              <div className='createprofile'>
//              <h3>Create Profile</h3>
//              <div className='formcreateprofile'>
//              <Form onSubmit={onSubmit}>
//              <div>
//                      <h4>Address</h4>
//                        <Input type='text'
//                        name='Address'
//                        id='Address'
//                        onChange={e=>setAddress(e.target.value)}
//                        invalid={errors.Address ?true:false}
//                        ></Input> 
//                          <FormFeedback>{errors.Address ? errors.Address : null}</FormFeedback>
//                     </div>
//                     <br/>
//                     <div>
//                      <h4>Phone</h4>
//                        <Input type='text'
//                        name='Phone'
//                        id='Phone'
//                        onChange={e=>setPhone(e.target.value)}
//                        invalid={errors.Phone?true:false}
//                        ></Input> 
//                          <FormFeedback>{errors.Phone ? errors.Phone : null}</FormFeedback>
//                     </div>
//                     <br/>
                  
//                     <div>
//                      <h4>Birthday</h4>
//                        <Input type='date'
//                        name='DOB'
//                        id='DOB'
//                        onChange={e=>setDOB(e.target.value)}
//                        invalid={errors.DOB?true:false}
//                        ></Input> 
//                        <FormFeedback >{errors.DOB ?errors.DOB:null}</FormFeedback>
//                     </div>
//                     <br/>
                  
//                   <div className='status'>
//                    <h4>Status</h4>
//                      <Input type='textarea' height='40px'
//                      name='Status'
//                      id='Status'
//                      onChange={e=>setStatus(e.target.value)}
//                      invalid={errors.Status?true:false}
//                      ></Input> 
//                      <FormFeedback >{errors.Status ?errors.Status:null}</FormFeedback>
//                   </div>
//                   <div className='button-login'>
//         <Button color="info" size="lg">Login</Button>
//         </div>
//                 </Form>

//              </div>
               
//         </div>
       
       
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         user: state.user,
//         errors:state.errors,
//     }
// }
// export default connect(mapStateToProps,{createProfile})(CreateProfile);