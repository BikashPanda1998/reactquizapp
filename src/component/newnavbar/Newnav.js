import React from "react";
import "./newnavbar.css";
const Newnav=()=>{
    return(
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <p>All</p>
                    <p>BestSeller</p>
                    <p>Today's Deals</p>
                    <p>Mobile</p>
                    <p>Customer Service</p>
                    <p>Books</p>
                    <p>Electronics</p>
                    <p>Prime</p>
                    <p>Fashion</p>
                    <p>NewRelease</p>
                </div>
                <div className="right_data">
                    <img src="./navdata.jpg" alt="not loading" />
                </div>
            </div>
        </div>
    );
}

export default Newnav;