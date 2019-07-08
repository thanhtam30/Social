import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getAlluser} from '../../../actions/profileAction';
import './rightpost.scss';
const AllUser=(props)=>{
    const {getAlluser}=props;
    useEffect(()=>{
        getAlluser()
    },[getAlluser])
    const profile=props.profile.profile
return (
    <div>
        {(profile && profile.length)>0 ? profile.map((profile,index)=>(
               <div key={index} className='postprofile'>
               <div className='row'>
                   <div className='col-sm-6'>
                   <div className='image'>
                   {(profile.Image.length)>0?<img alt='' src={`../upload/user/${profile.Image[profile.Image.length-1]}`}/>:
                   <img alt=''
                            src={"../upload/noimage/noimage.jpg"}
                            
                          />
                   }
                        
                   </div>
                   </div>
                   <div className='col-sm-6'>
                       <div className='row'>
                       <div className='right'>
                       <div className='Name'>
                       {profile.fullName}
                   </div>
                       </div>
                   
                       </div>
                   </div>
               </div>
                   
                 
               </div> 
        )):''}
    </div>
)
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        profile:state.profile
    }
}
export default connect(mapStateToProps,{getAlluser})(AllUser)
