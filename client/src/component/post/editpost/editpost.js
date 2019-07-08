import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { geteditpost, postedit } from "../../../actions/postAction";
import _ from "lodash";
import './editpost.scss';
import { Button, Form, Input, FormFeedback } from "reactstrap";
const Editpost = props => {
  
  const [Detail, setDetail] = useState("");
  const [file, setfile] = useState([]);
  // const [Image, setImage] = useState([]);
  const [errors, seterrors] = useState({});
  const id = props.user.user.id;

  useEffect(() => {
    if (!_.isEmpty(props.post.posts)) {
      setDetail(props.post.posts.Detail);
      // setImage(props.post.posts.Image);
    }
  }, [props.post.posts]);

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("Image", file[i]);
    }
    formData.append("Detail", Detail);
    formData.append("User", id);
    props.postedit(props.match.params.id, formData,props.history);
  };
  useEffect(() => {
    seterrors(props.errors);
  }, [errors, props.errors]);
  const deleteid = id => {
    if (window.confirm("Are you sure")) {
      const a = [...file].filter(e => e !== id);
      setfile(a);
    }
  };
  const {geteditpost}=props;
  useEffect(() => {
    geteditpost(id);
  }, [id,geteditpost]);

  return (
    <div className='row'>
       
      
      <div className="formeditpost">
        <Form onSubmit={onSubmit}>
        <div className='row'>
          <div className='formeditpost__Title'>
          Edit Post
          </div>
        </div>
         <div className='row'>
           <div className='col-sm-4'>
             <div className='formeditpost__Detail'>
             Detail
             </div>
           </div>
           <div className='col-sm-8'>
           <div className='formeditpost__Input'>
           <Input
              type="textarea"
              name="Detail"
              id="Detail"
              value={Detail}
              onChange={e => setDetail(e.target.value)}
              invalid={errors.Detail ? true : false}
            />
            <FormFeedback>{errors.Detail ? errors.Detail : null}</FormFeedback>
           </div>
           
           </div>
         </div>
         <br/>
         <div className='row'>
           <div className='col-sm-4'>
             <div className='formeditpost__Detail'>
             Image
             </div>
           </div>
           <div className='col-sm-8'>
           <div className='formeditpost__File'>
           <Input
              type="file"
              name="file"
              id="file"
              multiple
              
              onChange={e => setfile(e.target.files)}
              accept="image/*"
            />
           </div>
          

            {(file && file.length) > 0
              ? [...file].map((imgs, index) => (
                  <div key={index} className="formeditpost__image">
                  <div className='formeditpost__image--image'>
                  <img src={URL.createObjectURL(imgs)} alt='' width='200px' height='200px'/>
                  </div>
                    <div className='span'>
                    <span onClick={deleteid.bind(this, imgs)} className='span' >
                      <i className="fa fa-window-close" />
                    </span>
                    </div>

                  
                  </div>
                ))
              : ""}
           </div>
         </div>
          <br />
        

                <div className='row'>
                <div className="formeditpost__button">
            <Button color="info">
              Edit
            </Button>
          </div>
                </div>
          
        </Form>
      </div>
    </div>
    
   
  );
};
const mapStateToProps = state => {
  return {
    user: state.user,
    errors: state.errors,
    post: state.post
  };
};
export default connect(
  mapStateToProps,
  { geteditpost, postedit }
)(Editpost);
