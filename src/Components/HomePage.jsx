import React, { Component } from 'react'
import UserTable from './UserTable';

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    onLogoutClick = () => {
        this.props.history.push("/")
    }
    render(){
        return(
            <div>
                <UserTable />
                <button onClick={this.onLogoutClick}>
                    Login
                </button>
            </div>
        )
    }
}

export default HomePage;