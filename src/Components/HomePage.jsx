import React, { Component } from 'react'
import HooksTable from './HooksTable';
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
            <button onClick={this.onLogoutClick}>
                    Logout
                </button>
            <div>
                {/* <HooksTable /> */}
                <UserTable />
            </div>
            
            </div>
        )
    }
}

export default HomePage;
