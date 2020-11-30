import React, { useState } from 'react'
import { UserHeader } from './UserHeader'
import { useDispatch, useSelector } from 'react-redux'
import UserTableData from './UserTableData';
import "./Login.css"
import SearchBar from './SearchBar'

function HooksTable(props) {
    debugger;
    const [searchHere, onSearhHere] = useState('')
    const data = useSelector(state => state.fetchUsers[0]);
    const dispatch = useDispatch();

    

    return (
        <div>
            <SearchBar />
            <table>
                <thead>
                    <UserHeader />
                </thead>
                <tbody>
                    {data && data.filter((res) => (res.login.toLowerCase().indexOf(searchHere.toLowerCase()) > -1))
                    .map(user => {
                        return <UserTableData dt={user} />
                    })}
                </tbody>   
            </table>
        </div>
    )
}

export default HooksTable;