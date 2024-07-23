/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";

export default function UserList(){

    let userList = []

    fetch('https://dummyjson.com/users')
	    .then(res => res.json())
	    .then(data => {
		    for(const user of data.users){
                userList.push(user)
            }
	});
    
    console.log(userList)
    return(
        <>
            <h1 >LIST OF USERS</h1>
        </>
    )

}