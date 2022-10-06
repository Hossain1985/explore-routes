 import React from "react";
import { useLoaderData } from "react-router-dom";
 
  const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return(
    <div>
        <h2>
            This is FriendDetails.
        </h2>
    </div>
    )
  }
export default FriendDetails;