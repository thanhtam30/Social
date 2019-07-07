import React, {  useState } from "react";


import { Link } from "react-router-dom";
import "./ListComment.scss";

const PostItem = props => {
  const [Show, setShow] = useState(3);
  const Comment = props.comment;
  const load = () => {
    const a = Comment.length - Show;
    setShow(Show + a);
  };
  return (
    <div className="row">
    
        {(Comment && Comment.length) > 0
          ? Comment.slice(0, Show).map((comment, index) => (
              <div key={index} className="Comment">
                {(comment.User.Image && comment.User.Image.length) > 0 ? (
                  <div className='Comment__icon'>
                  <img alt=''
                    src={`../upload/user/${
                      comment.User.Image[comment.User.Image.length - 1]
                    }`}
                    
                  />
                  </div>
               
                ) : (
                  <div className='Comment__icon'>
                  <img alt=''
                    src={"../upload/noimage/noimage.jpg"}
                    
                  />
                  </div>
                
                )}
     

                <div className="Comment__comment">
                  <p>
                    {" "}
                    <Link to={"/Dashboar/" + comment.User._id}>
                      {comment.User.fullName}
                      {comment.User.id}
                    </Link>
                    :{comment.Comment}
                  </p>
                </div>
              </div>
            ))
          : ""}
        {Comment.length > 3 ? (
          Comment.length - Show < 1 ? (
            ""
          ) : (
            <div className="Comment__show">
              <button className="btn btn-link" onClick={load}>
                Show Comment({Comment.length - Show}Comment)
              </button>
            </div>
          )
        ) : (
          ""
        )}
        {/* {Comment.length > 3 ? (
          <div className="hienthi">
            <button
              className="btn btn-link"
              onClick={() => {
                setShow(Show - 4);
              }}
              to=""
            >
              Hidden Comment{" "}
            </button>
          </div>
        ) : (
          ""
        )} */}
      </div>
    
  );
};

export default PostItem;
