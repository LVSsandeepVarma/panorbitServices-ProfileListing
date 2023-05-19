import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Accordion from 'react-bootstrap/Accordion';
import { profilesList, selectedContact, getUserProfileForMessage } from "../features/profiles/profilesSlice";
import { useSelector, useDispatch } from "react-redux";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import MessageBox from "./messageBox";

export default function ChatComponent() {
    const dispatch = useDispatch()
    const profilesData = useSelector(profilesList)
    const [displayMsgDialoge, setDisplayMsgDialoge] = useState(false)
    const handleSelectedContact = (obj) => {
        dispatch(getUserProfileForMessage(obj))
        setDisplayMsgDialoge(true)
    }
    return (
        <>
            <div className="dropdownWrapper">
                {displayMsgDialoge ? <MessageBox /> : ""}
                <Accordion className="primary" style={{ width: "auto" }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header onClick={() => setDisplayMsgDialoge(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                            </svg>
                            Chat</Accordion.Header>
                        <Accordion.Body>
                            {profilesData.map((obj, key) => (
                                <ListGroupItem action key={key} className="fs-4 list-group-item list-group-item-action chat-contacts " onClick={() => { handleSelectedContact(obj) }}>
                                    <img className="rounded-circle" style={{ marginRight: "2%" }} src={obj?.profilepicture} alt="profile" width={"30px"} height={"30px"} />
                                    {obj.name}
                                </ListGroupItem>
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </>
    )
}