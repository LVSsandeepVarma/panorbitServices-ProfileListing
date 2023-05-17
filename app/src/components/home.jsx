import React from "react"
import ListGroup from 'react-bootstrap/ListGroup';
import ContactsList from "./listContacts"
import "../App.css"

export default function Home(){
    return(
        <div className="homeComponent">
            <div>
                <ContactsList/>
            </div>
        </div>
    )
}