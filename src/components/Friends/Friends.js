import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "./Friend";

const Friends =() =>{
    const friends = useLoaderData();
    console.log(friends)
    return(
        <div>
            <h2>I am Friends{friends.length}</h2>
            {
               friends.map(friend => <Friend
               key={friend.id}
                friend={friend}>
               </Friend>)
                 
            }
        </div>
    )
}
export default Friends; 