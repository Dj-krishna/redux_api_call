import React, { Component } from 'react';
import {getAllUsers} from '../actions/userAction'
import { connect } from 'react-redux';
import './Login';
import { UserHeader } from './UserHeader';
import UserTableData from './UserTableData';
import SearchBar from './SearchBar';


class UserTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchInput: '',
            searchHere: ''
        }
    }

    componentDidMount(){
       this.props.getAllUsers();
    }

    handleChange = searchText => {
    
        this.setState({
            searchInput: searchText
        });
    }

    onSearchHere = event => {
        this.setState({ 
        searchHere: event.target.value
        })
    }

    render(){
        debugger;
        let data = this.props.state.fetchUsers[0];   
        return(
            <div>
                <SearchBar onSearch={this.handleChange}/>
                 <input className="search"
                    type="text" 
                    placeholder="Search here..."
                    value={this.state.searchHere} 
                    onChange={this.onSearchHere} />
                    <br />

             <div className="grid-container">
            <table> 
                <thead>                   
                    <UserHeader />
                </thead>
                <tbody>
                    {data && data
                    .filter((res) => (res.login.toLowerCase().indexOf(this.state.searchHere.toLowerCase()) > -1))
                    .map(emp => {
                                    return <UserTableData dt={emp} />
                                }
                        )
                    }
                </tbody>
                </table>
                
            </div>
        </div>
        )
    }

}

const mapStateToProps = state => {return {state}}
export default connect(mapStateToProps, {getAllUsers}) (UserTable)
