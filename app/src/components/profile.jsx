import React from "react"
import Sidenavbar from "./navbars/sidenavbar"
import Header from "./navbars/navbar"
import DetailedProfile from "./detailedProfile"

export default function Profile(){
    return(
        <div>
            <div className="sideNavWrapper">
                <Sidenavbar/>
                <div className="profileComponent">
                    <Header/>
                    <DetailedProfile/>
                </div>
            </div>

        </div>
    )
}