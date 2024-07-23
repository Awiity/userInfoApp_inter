/* eslint-disable no-mixed-spaces-and-tabs */
import { useState, useEffect } from "react";

export default function UserList(){

    const [users, setUsers] = useState([]);

    function fetchData() {
        const url = 'https://dummyjson.com/users'
        fetch(url)
	    .then(res => res.json())
	    .then(data => {
	        setUsers(data.users);
            console.log(`Fetched data from ${url}`);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])
    

    return(
        <>
            <h1>LIST OF USERS</h1>
            <div className="user-list-container">
            <ul>
                {users.map((user) => 
                <div key={user.id} className="user">

                    <h2 className="user-names">{user.firstName} {user.lastName}</h2>

                </div>)}
            </ul>
            </div>
        </>
    )

}