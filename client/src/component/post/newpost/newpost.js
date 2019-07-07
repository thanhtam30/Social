import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { newpost } from "../../../actions/postAction";

import './post.scss'
import { Button, Modal, ModalHeader, ModalBody,Form,  Input, FormFeedback } from 'reactstrap';
const Modals = (props) =>{


  const [Detail, setDetail] = useState("");
  const [file, setfile] = useState([]);
  const [Image] = useState([]);
  const [errors, seterrors] = useState({});
  const id = props.user.user.id;
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append(Image, file[i]);
    }
    formData.append("Detail", Detail);
    formData.append("User", id);
    props.newpost(formData);
    setDetail('')
    setfile([])
    // toggle();
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
  const isShowing=props.isShowing
  const toggle=props.toggle
    return (
        <Modal isOpen={isShowing} toggle={toggle}>
          <ModalHeader toggle={toggle}>NEW POST</ModalHeader>
          <ModalBody>
          <Form onSubmit={onSubmit}>
          <br />
          <div>
            {props.user.user.Image ? (
              <img style={{width:'40px',height:'40px',borderRadius:'50%'}}  src={`../upload/user/${props.user.user.Image[props.user.user.Image.length-1]}`} alt=''/>
            ) : (
              <img src="../upload/noimage/noimage.jpg" className='postimageIcon' alt=''/>
            )}
            <Input
              type="text"
              name="Detail"
              id="Detail"
              value={Detail}
              onChange={e => setDetail(e.target.value)}
              invalid={errors.Detail ? true : false}
              style={{width:'60%',marginTop:'-40px',marginLeft:'50px'}}
            />
            {<FormFeedback>{errors.Detail ? errors.Detail : null}</FormFeedback> }
          </div>
          <br />

          <div className="input-group-prepend">
            <h3>Image:</h3>
          </div>
          <div>
            <Input
              type="file"
              name="file"
              id="file"
              style={{width:'60%',marginTop:'-40px',marginLeft:'100px'}}
              multiple
              placeholder="Enter file..."
              onChange={e => setfile(e.target.files)}
              accept="image/*"
            />

            {(file && file.length) > 0
              ? [...file].map((imgs, index) => (
                  <div key={index} className="imageproduct">
                    <img src={URL.createObjectURL(imgs)}  width='200px' height="200px" alt=''/>

                    <span onClick={deleteid.bind(this, imgs)}>
                      <i className="fa fa-window-close" />
                    </span>
                  </div>
                ))
              : ""}
          </div>
          <br />

          <div className="button-post">
          <Button color="primary"
          //  onClick={toggle}
           >Save</Button>{' '}
             <Button color="primary"
          onClick={toggle}
           >Cancel</Button>{' '}
          </div>
        </Form>
          </ModalBody>
        
        </Modal>
    )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { newpost }
)(Modals);
