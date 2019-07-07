import React, { useState, useEffect } from "react";
import { Form, Input, FormFeedback } from "reactstrap";

import { connect } from "react-redux";
import { commentpost } from "../../../actions/postAction";
import './newcomment.scss'

function PostComment(props) {
  const [Comment, setComment] = useState("");
  const [errors, seterrors] = useState({});
  const id = props.user.user.id;
  const onSubmit = e => {
    e.preventDefault();
    const newComment = {
      Comment: Comment,
      User: id
    };
    props.commentpost(props.id, newComment);
    setComment("");
  };
  useEffect(() => {
    seterrors(props.errors);
  }, [errors, props.errors]);

  return (
    <div className="postcomment">
      <div className="row">
        {(props.user.user.Image && props.user.user.Image.length) > 0 ? (
          <div className='postcomment__newcommenticon'>
          <img alt=''
            src={`../upload/user/${
              props.user.user.Image[props.user.user.Image.length - 1]
            }`}
            
          />
          </div>
         
        ) : (
          <div className='postcomment__newcommenticon'>
          <img
            src={"../upload/noimage/noimage.jpg"}
            alt=''
          />
          </div>
          
        )}
        <div className="postcomment__input">
          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              nam="Comment"
              id="Comment"
              value={Comment}
              invalid={errors.Comment ? true : false}
              onChange={e => setComment(e.target.value)}
            />
            <FormFeedback>
              {errors.Comment ? errors.Comment : null}
            </FormFeedback>
            <br />
          </Form>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    post: state.post,
    user: state.user,
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { commentpost }
)(PostComment);
