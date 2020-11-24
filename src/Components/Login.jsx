import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    render(){
        return(
            <div>
                <span>Please login Here</span><br /><br />
                    <label>&nbsp;User Name</label><br />
                    <input 
                    type = "text" 
                    placeholder="please enter user name" 
                    onChange = {(e) => this.onUserNameChange(e.target.value)} 
                    value = {this.state.userName}/><br />
                    
                    
                    <label>Password</label><br />
                    <input 
                    type = "password" 
                    placeholder="please enter password" 
                    onChange = {(e) => this.onPasswordChange(e.target.value)} 
                    value = {this.state.password}/><br /><br />
                    <button color="primary" onClick = {this.onLoginClick} >Login</button>
            </div>
        )
    }

    onLoginClick = ()=>{
        this.props.history.push("/home", {userName: this.state.userName})
    }

    onUserNameChange =(e)=>{
        this.setState({
            userName: "jayakrishna"
        })
    }

    onPasswordChange =(e)=>{
        this.setState({
            password: "jayakrishna"
        })
    }
}

export default Login;

