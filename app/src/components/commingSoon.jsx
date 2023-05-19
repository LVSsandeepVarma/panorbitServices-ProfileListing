import React from "react";
import Sidenavbar from "./navbars/sidenavbar"
import Header from "./navbars/navbar"

export default function CommingSoon(){
    return(
        <div>
            <div className="sideNavWrapper">
                <Sidenavbar />
                <div className="profileComponent">
                    <Header />
                    <div className="commingSoonComponent">Comming Soon...</div>
                </div>
            </div>
        </div>
    )
}