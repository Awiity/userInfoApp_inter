/* eslint-disable no-mixed-spaces-and-tabs */
import { useState, useEffect } from "react";
import './UserList.css'

export default function UserList(){

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    let filterKeys = ["firstName", "lastName", "maidenName"];
    const filterAddressKeys = ["city", "country", "address"];
    let userString = ""

    const maleImageURL = "data:image/png;base64,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"
    const femaleImageURL = "data:image/jpeg;base64,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"
    
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

    function handleSearchChange(event){
        setFilter(event.target.value);
        
    }

    
    console.log(users[0])
    return(
        <>
            <h1>LIST OF USERS</h1>
            <input  id="filter" 
                    name="filter" 
                    type="text" 
                    value={filter}
                    onChange={handleSearchChange}
                    placeholder="Search..." 
                    />

            <div className="user-list-container">

                    {users.filter(user => {
                        userString = "";
                        filterKeys.every(key => userString += " " + user[key] === undefined ? "" : user[key]);
                        filterAddressKeys.every(key => userString += " " + user.address[key] === undefined ? "" : user.address[key]);
                        console.log(userString);
                        return userString.includes(filter) || filter === "";
                        })
                    .map((user) => 
                    <div key={user.id} className="user-div">
                        <img src={user.gender == "male" ? maleImageURL : femaleImageURL} alt="placeholder"/>
                        <p className="user-info">   Full Name: {user.firstName} {user.lastName} {user.maidenName}<br />
                                                    Age: {user.age}<br/>
                                                    Gender: {user.gender}</p>
                        <p className="user-contact-info">   Phone number: {user.phone}<br/>
                                                            City: {user.address.city}, {user.address.country}<br/>
                                                            Street: {user.address.address}</p>


                    </div>)}

            </div>
        </>
    )

}