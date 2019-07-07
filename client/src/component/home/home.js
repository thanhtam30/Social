import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const Home=(props)=>{
useEffect(()=>{
    if(props.user.isAuthenticated){
        props.history.push('/ListPost')
    }
})
return (
    <div className="Home">
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Social</h1>
            <p className="lead">
              {' '}
            Home
            </p>
            <hr />
            <Link to="/SignIn" className="btn btn-lg btn-info mr-2">
              Sign Up
            </Link>
            <Link to="/Login" className="btn btn-lg btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps,null)(Home);
