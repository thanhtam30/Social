import React from "react";
import { connect } from "react-redux";
import ReactMoment from "react-moment";
import {  likeandunlike, deletepost } from "../../../../actions/postAction";
import "./rightprofile.scss";
import Comment from '../comment/Comment';
const PostProfile = props => {
  // const [show, setShow] = useState(true);
  // const visibility = show ? 'visible' : 'hidden';

  const { post } = props.post;

  // const likeandunlike = id => {
  //   props.likeandunlike(id);
  // };
  return (
    <div className="row">
      {post && post.length
        ? post.map((post, index) => (
            <div key={index} className="PostProfile">
              {(post.User.Image && post.User.Image.length) > 0 ? (
                <div className="PostProfile__postimageIcon">
                <img alt=''
                  src={`../upload/user/${
                    post.User.Image[post.User.Image.length - 1]
                  }`}
                  
                />
                </div>
              
              ) : (
               <div className="PostProfile__postimageIcon">
               <img alt=''
                  src={"../upload/noimage/noimage.jpg"}
                  
                />
               </div>
              )}
              <div className="PostProfile__namepost">{post.User.fullName}</div>
              <div className="PostProfile__time">
                {<ReactMoment fromNow>{post.Date}</ReactMoment>}
              </div>

              <div className="PostProfile__detail">
                <p>{post.Detail}</p>
              </div>

              <div className="PostProfile__image">
                {(post.Image && post.Image.length) > 0 ? (
                  <img alt=''
                    src={`../upload/post/${post.Image[post.Image.length - 1]}`}
                  />
                ) : (
                  ""
                )}
              </div>

              <div className="PostProfile__menu">
                <button className="PostProfile__menu--button">
                  <i className="fas fa-thumbs-up" /> Thích ({post.Like.length})
                </button>
                <button className="PostProfile__menu--button">
                  <i className="far fa-comment-alt" /> Bình luận (
                  {post.Comment.length})
                </button>
                <button className="PostProfile__menu--button">
                  <i className="fas fa-share-alt" /> Share
                </button>
              </div>
              <div>
              <div className='comment'>
                     <Comment comment={post.Comment}/>

              </div>
              {/* <h1 style={{ visibility }}>useState Hook is awesome!</h1>
      <button
        onClick={() => { setShow(!show) }}
      >Button</button> */}

              </div>
            </div>
          ))
        : ""}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user,
    post: state.post
  };
};
export default connect(
  mapStateToProps,
  { deletepost, likeandunlike }
)(PostProfile);
