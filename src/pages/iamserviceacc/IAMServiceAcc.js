import React from 'react';
import {useLocation} from "react-router-dom";

function IAMServiceAcc(){
    const useQuery =()=> {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let Name=query.get("name");
    let age=query.get("age");
    
    return( 
            <div className="EmptyDiv">
                <h1>{Name}</h1>
                <h1>{age}</h1>
            </div>
        );
    
}
 
export default IAMServiceAcc;