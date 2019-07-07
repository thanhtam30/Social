import React from 'react';
import {Link} from 'react-router-dom';
import './Comment.scss'
const Comment=(props)=>{
    const comment=props.comment;
    
    return (
        <div  >
            {(comment && comment.length)>0 ?comment.map((comment,index)=>(

                <div key={index} className="comment">
                
                {(comment.User.Image && comment.User.Image.length) > 0 ? (
                  <div className='comment__icon'>
                  <img alt=''
                  src={`../upload/user/${
                    comment.User.Image[comment.User.Image.length - 1]
                  }`}
                
                />
                  </div>
                
              ) : (
                <div className="comment__icon">
                <img alt=''
                  src={"../upload/noimage/noimage.jpg"}
                  
                />
                </div>
                
              )}
                
               
              
             
              <div className='comment__comment'>
              <p>   <Link to={"/Dashboar/" + comment.User._id}>{comment.User.fullName}{comment.User.id}</Link>:{comment.Comment}</p>
              </div>
                   
                </div>
            )):'' }
        </div>
    )
}
export default Comment;