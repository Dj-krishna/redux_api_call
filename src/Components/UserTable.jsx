import React, { Component } from 'react';
import {getAllUsers} from '../actions/userAction'
import { connect } from 'react-redux';

class UserTable extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
       this.props.getAllUsers();
    }

    
    render(){
let {data} = this.props.state.data;

        return(
            <div>
                <table>
                    <UserHeader />
                    {data.map(emp => (<tr>
                    <td>{emp.id}</td>
                    <td>{emp.employee_name}</td>
                    <td>{emp.employee_salary}</td>
                    <td>{emp.employee_age}</td>
                    <td>{emp.profile_image}</td>
                        </tr>))}
                </table>
            </div>
        )
    }

}

const UserHeader = () => {
    return (<tr>
        <th>Id</th>
        <th>Employee Name</th>
        <th>Employee Salary</th>
        <th>Employee Age</th>
        <th>Profile Image</th>
    </tr>)
}

const UserData = (props) => {
        return (<tr>
            <td>{props.userProfile.id}</td>
            <td>{props.userProfile.employee_name}</td>
            <td>{props.userProfile.employee_salary}</td>
            <td>{props.userProfile.employee_age}</td>
            <td>{props.userProfile.employee_image}</td>
            <td><input type="checkbox" checked={props.userProfile.status} /></td>
            {/* <td><button onClick = {()=>{props.onDeleteUser(props.userProfile._id)}}>Delete</button></td> */}
        </tr>)
    }
    

const mapStateToProps = state => {return {state}}
export default connect(mapStateToProps, {getAllUsers}) (UserTable)