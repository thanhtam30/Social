import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {updateImageUser,previewUser} from '../../actions/profileAction';
// import _ from 'lodash';
import { Form, Input } from "reactstrap";

const UpdateImageUserProfile=(props)=>{
    // const [ Image] = useState('');
    const [file, setFile] = useState('');
    // useEffect(() => {
    //     if (!_.isEmpty(props.profile.profile)) {
    //       Image(props.profile.profile.Image);
    //     }  
    //   }, [props.profile.profile]);
      const {previewUser}=props;
      const id=props.match.params.id;
      // useEffect(() => {
      //   if (id) {
      //     previewUser(id);
      //   }
        
      // }, [id,previewUser]);
    useEffect(()=>{
        previewUser(id)
    },[id,previewUser])
  const   onSubmit=e=>{
        e.preventDefault();
        const formData=new FormData();
        for(let i=0;i<file.length;i++){
            formData.append('Image', file[i]);
        }
        props.updateImageUser(props.match.params.id,formData,props.history)
    }
    return (
        <div className='uploadprofile'>
        <Form onSubmit={onSubmit}>
        <div className='row'>
            <div className='headerupdateimageprofile'>
                <h2>Upload Image</h2>
            </div>
        </div>
        <div className='row'>
         <div className=''>
          <div className='headerupload'><h4>Upload</h4></div>
          <div className='inputupload'> 
           {/* <Input
              type="file"
              name="file"
              id="file"
              multiple
              placeholder="Enter file..."
              onChange={e=>setFile((e.target.files[0]))}
              accept="image/*"
            /> */}
            <Input
              type="file"
              name="file"
              id="file"
              
              placeholder="Xhoose file..."
              onChange={e => setFile(e.target.files)}
              accept="image/*"
            />

            {(file && file.length) > 0
              ? [...file].map((imgs, index) => (
                  <div key={index} className="imageproduct">
                    <img src={URL.createObjectURL(imgs)} alt=''/>

                   
                  </div>
                ))
              : ""}
            </div>
        
         </div>
        </div>
                 <div className='buttonupdateimage'>
                 <button className='btn btn-info'>Upload</button>
                 </div>
                   
        </Form>
           
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}
export default connect(mapStateToProps,{updateImageUser,previewUser})(UpdateImageUserProfile);