import React, { Component,useState,useEffect} from "react";
import Password from "antd/lib/input/Password";

// class PasswordShowHide extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hidden: true,
//       password: ""
//     };

//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//     this.toggleShow = this.toggleShow.bind(this);
//   }

//   handlePasswordChange(e) {
//     this.setState({ password: e.target.value });
//   }

//   toggleShow() {
//     this.setState({ hidden: !this.state.hidden });
//   }

//   componentDidMount() {
//     if (this.props.password) {
//       this.setState({ password: this.props.password });
//     }
//     console.log(this.props.password)
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type={this.state.hidden ? "password" : "text"}
//           value={this.state.password}
//           onChange={this.handlePasswordChange}
//         />
//         <button onClick={this.toggleShow}>Show / Hide</button>
//       </div>
//     );
//   }
// }
const PasswordShowHide=(props)=>{
const [Password,setPassword]=useState('')
const [hidden,sethidden]=useState(true);
 const  toggleShow=() =>{
    sethidden(!hidden);
  }
  useEffect(()=>{
    if (props.password) {
               setPassword({ password: props.password });
             }
  },(props.password))
return(
    <div>
           <input
          type={hidden ? "password" : "text"}
          value={Password}
          onChange={e=>setPassword(e.target.value)}
        />
        <button onClick={toggleShow}>Show / Hide</button>
      </div>
)
}
export default PasswordShowHide;




