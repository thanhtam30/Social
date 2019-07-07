import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./login.scss";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  FormFeedback,
} from "reactstrap";
import { login } from '../../../actions/userActions';
const SignIN = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, seterrors] = useState({});
  const onSubmit = e => {
    e.preventDefault();
    const newData = {
      email: email,
      password: password
    };
    props.login(newData, props.history);
  };
  useEffect(() => {
    if (props.user.isAuthenticated) {
      props.history.push("/Listpost");
    }
  });
  useEffect(() => {
    seterrors(props.errors);
  }, [errors, props.errors]);
  return (
    <div className="row">
      <div className="formlogin">
        <Form onSubmit={onSubmit}>
          <div className="row">
            <div className="formlogin__header">Login</div>
          </div>
          <div className="row">
            <div className="formlogin__username">
              <div className="col-sm-4">
                <div className="formlogin__username--lable">User Name:</div>
              </div>
              <div className="col-sm-8">
                <div className="formlogin__username--input">
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter email..."
                    onChange={e => setEmail(e.target.value)}
                    invalid={errors.email || errors.noemail ? true : false}
                  />
                  <FormFeedback>
                    {errors.email || errors.noemail
                      ? errors.email || errors.noemail
                      : null}
                  </FormFeedback>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="formlogin__password">
              <div className="col-sm-4">
                <div className="formlogin__password--lable">PassWord:</div>
              </div>
              <div className="col-sm-8">
                <div className="formlogin__password--input">
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password..."
                    onChange={e => setPassword(e.target.value)}
                    invalid={
                      errors.password || errors.nopassword ? true : false
                    }
                  />
                  <FormFeedback>
                    {errors.password || errors.nopassword
                      ? errors.password || errors.nopassword
                      : null}
                  </FormFeedback>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Link to="/SignIn">You do not have an account</Link>
          </div>
          <div className="formlogin__button">
            <Button className="btn btn-info">Login</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    errors: state.errors,
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { login }
)(SignIN);
